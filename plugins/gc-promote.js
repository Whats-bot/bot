let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] USO APROPIADO*\n\n*┯┷*\n*┠≽ ${usedPrefix}daradmin @tag*\n*┠≽ ${usedPrefix}darpoder -> responder a un mensaje*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] Номер введен некорректно!Введите правильный номер*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'назначитьадмином')
conn.reply(m.chat, `*[ ✅ ] ÓRDENES RECIBIDAS*`, m)
}}
handler.help = ['*593xxx*','*@usuario*','*responder chat*'].map(v => 'назначитьадмином ' + v)
handler.tags = ['group']
handler.command = /^(назначитьадмином)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
