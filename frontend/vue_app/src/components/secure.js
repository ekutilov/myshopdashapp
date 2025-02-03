export async function encrypt(message, key) {
    const ab2str = (buf) => String.fromCharCode.apply(null, new Uint8Array(buf));

    const iv = crypto.getRandomValues(new Uint8Array(12));
    const textEnc = new TextEncoder().encode(message); // get ArrayBuffer
    const keyHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key)); // get ArrayBuffer

    const keyEnc = await crypto.subtle.importKey(
        'raw',
        keyHash, 
        { name: 'AES-GCM', length: 256 }, 
        true, 
        ['encrypt', 'decrypt']
    ); // get CryptoKey

    const encrypted = await crypto.subtle.encrypt(
        { name:'AES-GCM', iv: iv }, 
        keyEnc, 
        textEnc
    ); // get ArrayBuffer

    return {
        iv: btoa(ab2str(iv)),
        message: btoa(ab2str(encrypted)),
    }
}

export async function decrypt(message, key, iv) {
    const str2ab = (str) => {
        const buf = new ArrayBuffer(str.length);
        const bufView = new Uint8Array(buf);
        for (let i = 0; i < str.length; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }

    const keyHash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(key)); // get ArrayBuffer

    const keyEnc = await crypto.subtle.importKey(
        'raw',
        keyHash, 
        { name: 'AES-GCM', length: 256 }, 
        true, 
        ['encrypt', 'decrypt']
    ); // get CryptoKey

    const decrypted = await crypto.subtle.decrypt(
        { name:'AES-GCM', iv: str2ab(atob(iv)) }, 
        keyEnc, 
        str2ab(atob(message))
    ); // get ArrayBuffer

    return new TextDecoder().decode(decrypted);
}