let handler = async (m, { conn, args, usedPrefix, command }) => {
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'открыть': 'not_announcement',
'закрыть': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*

*┏━━━❲ ✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ ❳━━━┓* 
*┠┉↯ ${usedPrefix + command} открыть*
*┠┉↯ ${usedPrefix + command} закрыть*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
{m.reply('*[ ✔ ] Настройки группы изменены*')}
}
handler.help = ['group открыть / закрыть']
handler.tags = ['group']
handler.command = /^(группу)$/i
handler.admin = true
handler.botAdmin = true
export default handler
