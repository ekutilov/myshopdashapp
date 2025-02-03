async function message(text) {
  return await chrome.runtime.sendMessage({sender: "ibox", content: text});
  // "iboxEvent:click"
}

export async function mainClickHandler() {
  console.log('mainClickMessage');
  await message("iboxEvent:click")
}

export async function button1ClickHandler() {
  console.log('mainClickMessage2')
  await message("iboxEvent:button1click")
}

export async function button2ClickHandler() {
  console.log('mainClickMessage3')
  await message("iboxEvent:button2click")
}

export async function startup() {
  console.log('startup')
  await message("iboxEvent:start")
}

export async function close_box() {
  console.log('close')
  await message("iboxEvent:close")
}