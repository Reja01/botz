let handler = async m => m.reply(`
RULES BAGI PENGGUNA </CODE > BOT
➤dilarang shere bot tanpa izin owner(jika melanggar nomer yg ngeshere akan di spam)
➤dilarang rasisme/18+ saat menggunakan bot  
➤ Tolong Gunakan jeda Jangan Spam Saat Menggunakan Bot, Mentang Mentang Gratis Diborong semua.
➤ Call/VC Bot Auto Block.
➤ Jangan Call/VC Bot Kalau Tidak aktif.
➤ Bot tidak aktif 24 jam, jadi tergantung kalau ownernya lagi ada waktu botnya juga on.

Konsekuensi Bila Melanggar Rules
Bot Akan Memblokir Kamu Atau Keluar Dari Grup Yang Kamu Kelola.
━━━━━━━[ PENTING! ]━━━━━━━
➤ Kami tidak pernah meminta anda untuk berdonasi! ingin donasi chat owner
➤ Kami tidak menyimpan gambar, video,  audio, dan dokumen yang anda kirim
➤ Kami tidak akan pernah meminta anda untukmemberikan informasi pribadi
➤ Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot
➤  Jika kamu menelpon bot Dan di block,Owner Tidak Bertanggung Jawab
➤ Apapun yang anda perintah pada bot ini , KAMI TIDAK AKAN BERTANGGUNG JAWAB
━━━━━━━━━━━━━━━━━━━


`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules']
handler.tags = ['main']
handler.command = /^rules$/i

module.exports = handler
