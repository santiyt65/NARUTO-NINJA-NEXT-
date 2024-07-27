let handler = async (m, { conn, usedPrefix, isOwner }) => {
    await m.react('😺')
    await conn.reply(m.chat, `Hola @${m.sender.split`@`[0]} si necesitas la ayuda de mi creador porfavor escribele al privado\n*- Solo asuntos importantes -*`, estilo, { mentions: [m.sender] })
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おsantiyt65.xyz⁩;;\nFN:おsantiyt65.xyz⁩\nORG:おsantiyt65.xyz⁩\nTITLE:\nitem1.TEL;waid=54 9 260 420-0949:54 9 260 420-0949\nitem1.X-ABLabel:おsantiyt65.xyz⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おsantiyt65.xyz⁩\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'おsantiyt65.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
    }
    handler.customPrefix = /^(@54 9 260 420-0949|@54 9 260 420-0949|@54 9 260 420-0949)$/i
    handler.command = new RegExp
    export default handler