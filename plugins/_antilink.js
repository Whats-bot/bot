let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*𝙷𝙴𝚈!! 𝙴𝙻 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾, 𝙿𝙴𝚁𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝙰𝙳𝙼𝙸𝙽 😎, 𝚂𝙰𝙻𝚅𝙰𝙳𝙾/𝙰!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await conn.sendButton(m.chat, `*「 Внимание!Ссылка! 」*\n*АсталаВиста,детка 👋, ${await this.getName(m.sender)} Ссылки в группе запрещены,по этому тебя за шкварник и пинка для ускорения*${isBotAdmin ? '' : '\n\n*[❗𝐈𝐍𝐅𝐎❗] Админку мне быстро!И я их буду сносить за ссылки!*'}`, author, ['Функция антиссылки отключена', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙰𝙳𝙾 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) 𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙴 𝙲𝙾𝙽 𝙴𝙻 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙻𝙾 𝙷𝙰𝙱𝙸𝙻𝙸𝚃𝙴*')
}
return !0
}
