let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*「 ИНФОРМАЦИЯ О ГРУППЕ 」*\n
*ГРУППА:* 
${groupMetadata.id}

*НАЗВАНИЕ ГРУППЫ:* 
${groupMetadata.subject}

*ОПИСАНИЕ И КРАТКИЕ ПРАВИЛА:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}

*КОД:*
${participants.length} 

*СОЗДАТЕЛЬ ГРУППЫ:* 
@${owner.split('@')[0]}

*АДМИНЫ:*
${listAdmin}

*МОИ ОПЦИИ ВКЛЮЧЕНЫЕ В ГРУППЕ:*
—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
—◉ ОБНАРУЖЕНИЕ: ${detect ? '✅' : '❌'} 
—◉ АНТИССЫЛКА: ${antiLink ? '✅' : '❌'} 
—◉ АНТИССЫЛКА2: ${antiLink2 ? '✅' : '❌'} 
—◉ 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈: ${modohorny ? '✅' : '❌'} 
—◉ АВТОСТИКЕР: ${autosticker ? '✅' : '❌'} 
—◉ АУДИО: ${audios ? '✅' : '❌'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
