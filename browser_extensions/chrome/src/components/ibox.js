export default function(Tab) { 

    return {

        tab: Tab,
        app: Tab.app,
        button_key: { 1: 'main_button', 2: 'button2', 3: 'button3', 4: "close_button" },
        disable() { 
            this.shown = false
        }
        ,
        async close() { 
            await this.reset()
            return  
        }
        ,
        async init() {

            this.log('iBox Started for tab: ', Tab.chrome_tab.url, " #",Tab.chrome_tab.id)
            return 
        
        }
        ,
        async setAppearance(state_object) {
            return await chrome.tabs.sendMessage(Tab.chrome_tab.id, { target: "ibox", subject: "appearance", content: state_object });
        }
        ,
        async shown(value=true) { 
            if (typeof value === 'boolean') { 
                return await this.setAppearance({ shown: value })
            } else { 
                return await this.error("ibox.shown property should be boolean") 
            }
        }
        , 
        async active(value=true) { 
            // check the type of value
            if (typeof value === 'boolean') { 
                return await this.setAppearance({ main_button: { active: value } }) 
            } else { 
                return await this.error("ibox.active property should be boolean") 
            }
        }
        , 
        async set_tooltip_text(text, button=1) {

            var ttip_text_object
            if (Array.isArray(text)) { 
                ttip_text_object = { tooltip_text: text[0], tooltip_text2: text[1] } 
            } else { 
                ttip_text_object = { tooltip_text: text } 
            }
            console.log("ttip appearance", { [this.button_key[button]]: ttip_text_object })
            return await this.setAppearance({ [this.button_key[button]]: ttip_text_object })
        }
        ,
        expanded: {
            set: async function(value) { 
                if (typeof value === 'boolean') { 
                    return await this.setAppearance({ show_side_buttons: value }) 
                } else { 
                    return this.error("ibox.expanded property should be boolean") 
                }
            }
        }
        ,
        in_progress: { 
            set: async function(value) { 
                if (typeof value === 'boolean') { 
                    return await this.setAppearance({ main_button: { wheel: value } }) 
                } else { 
                    return this.error("ibox.in_progress property should be boolean") 
                }
            }
        }
        ,
        async pc(value) {

                if (typeof value === 'number') { 
                    return await this.setAppearance({ main_button: { wheel: true, indeterminate : false, pc: value > 100 ? 100 : value } }) 
                } else if (value === undefined) { 
                    return await this.setAppearance({ main_button: { wheel: true, indeterminate : true } }) 
                }
                else { 
                    return this.error("ibox.pc property should be a number or undefined") 
                }
        }
        , 
        async reset() { 
            return await this.setAppearance(this.iboxStates.reset) 
        } 
        ,
        async state(state_name) {
            await this.setAppearance(this.iboxStates[state_name])
        }
        ,
        iboxStates: {
            downloadInProgress: { main_button: { active: false, tooltip_text: "Your data is being downloaded" } },
            downloadComplete: { main_button: { active: false, tooltip_text: "You data has been donwloaded to your computer now" } },
            dashboardStart: { button1: { active: false, loading: true, tooltip_text: "Your data is being uploaded" } },
            dashboardStarted: { button1: { active: true, loading: false, 
                tooltip_text: "Make it a dashboard", 
                tooltip_text2: "(your data will be securely transferred and displayed in your personal shopping dashboard at myshopdash.app)" } },
            reset: { show_side_buttons: false, main_button: { 
                active: true,
                wheel: false, 
                pc: 0, 
                color: "success", 
                tooltip_text: "MyShopDash Button: click to download all your eReceipts", } 
            },
            button2InProcess: { button2: { active: false, loading: true, tooltip_text: "Your data is being prepared" } },
            button2Reset: { button2: { active: true, loading: false, tooltip_text: "Download your data as a JSON file" } },
            downloadError: { main_button: { active: false, tooltip_text: "No shopping data received. You may not have any receipts here", color: "error", tooltip_text2: "or some error happened - let us know" } },
        }
        ,
        async wheelOff() {
            await this.setAppearance({ main_button: { wheel: false, pc: 0, indeterminate: false }})
        }
        ,
        async error(message) {
            await this.setAppearance({ main_button: { active: false, tooltip_text: message, color: "error" } })
            return Tab.error(...arguments)
        }
        ,
        async unroll() {
            await this.setAppearance({ show_side_buttons: true })
        },
        log() { return Tab.log(...arguments) }
    
    }
}
