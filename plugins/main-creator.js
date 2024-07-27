let handler = async (m, { conn, usedPrefix, isOwner }) => {
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おSANTIYT65.xyz⁩;;\nFN:おSANTIYT65.xyz⁩\nORG:おSANTIYT65⁩\nTITLE:\nitem1.TEL;waid=54 9 260 420-0949:54 9 260 420-0949\nitem1.X-ABLabel:おSANTIYT65.xYZ⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おSANTIYT65.xyz⁩\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
    }
    handler.help = ['owner']
    handler.tags = ['main']
    handler.command = ['owner', 'creator', 'creador', 'dueño'] 
    
    export default handler