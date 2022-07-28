let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Jarot
│ ✎ _Sekolah_ : Bocel Esempe
│ ✎ _Umur_ : Bocel
│ ✎ _Asal_ : Aceh
│ ✎ _Status_ : Turu
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/H6AeFd5BKNcIa6uErFxoTZ
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/IcdjJs5yzQH0TwFwEuSoS8
│ ✎ _Youtube _:
│    https://youtube.com/channel/VanzzXYT
│ ✎ _Instagram_ : 
│    https://instagram.com/vanzzxyt_official
│ ✎ _WhatsApp_ :
│    wa.me/6285760165634
╰───────────────────
`.trim(), m)
}

handler.help = ['inforevan]
handler.tags = ['main', 'utama']
handler.command = /^(infojarot)$/i

handler.exp = 150

module.exports = handler
