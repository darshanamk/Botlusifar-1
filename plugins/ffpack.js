/*උස්සන්න එපා ඉතින් හුත්තො අමාරුවෙන් හැදුවෙ

ඉස්සුවොත් කෙල වෙලාම පලයම්*/
const kavishka = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const ll ="*```Enter a word```"
const Ln = "Free Fire logo maker"
const code = "* 50 FF LOGO PACK_*\n\n*⛲.ff01 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff02 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff03 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff04 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff5 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff6 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff07 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff08 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff09 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff10 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff12 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff13 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff14 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff15 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff16 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff17 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff18 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff19 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff20 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff21 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff22 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff23 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff24 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff25 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff26 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff27 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff28 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff29 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff30 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff31 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff32 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff33 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff34 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff35 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff36 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff37 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff38 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff39 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff40 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff41 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff42 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff43 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff44 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff45 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff46 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff47 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff48 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff49 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠*\n*⛲.ff50 : M͓̽a͓̽k͓̽e͓̽r͓̽s͓̽ 🄵🄵 L͓̽O͓̽G͓̽O͓̽ B͓̽Y͓̽*\n*𝕤𝕖𝕟𝕕 𝕗𝕣𝕖𝕖 𝕗𝕚𝕣𝕖 𝕝𝕠𝕘𝕠\n\n*Maker By Nethmika Bot🔥*"
const KSV = Config.WORKTYPE == 'public' ? false : true


kavishka.addCommand({pattern: 'ffpack', fromMe: KSV, desc: Ln,}, (async (message, match) => {

await message.client.sendMessage(

message.jid,code, MessageType.text);

}));

kavishka.addCommand({ pattern: 'ff02 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/ecf60ef31d7e75c2620fd.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff01 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/db68993a2656b4748a16a.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff03 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '') return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cc2fe3ca2a712d3b14cc.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff04 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a25356767c7833bbd9ca.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff05 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/33eb446f4132e76a2fd58.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff06 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2f7de65a46ed366a63676.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff07 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e5f8d6f2e9f9000ebe3d9.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff08 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6090aadefff57762e8b35.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff09 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6ad8890337f9f2ea3b92a.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff10 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/244312383300b34f99bcc.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff11 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b670c4eca0fafdb88a7f0.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff12 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/95a088f7b0453d4d82b7a.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff13 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/fd7500684c9ae986befc3.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff14 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1e962653c4412f5271844.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff15 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/24483aa07e99edad88b4c.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff16 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/129a6861e1efdfd0f7bca.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff17 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/deab8459bd6d06b4f9421.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff18 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/696f93289f32687d3b4f7.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff19 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0145f46d111ed493e62b.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff20 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f577262bce9b3733402ea.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff21 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/099f8580a45433eb6688c.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff22 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a1fe3fe9e295c24256ede.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff23 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/2056e2cdd3a30971da0a6.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff24 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c730c8c57cfccb7756dc4.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff25 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d3749dfe51e3f13012e8e.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff26 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f376a881b40c1e994d75d.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff27 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/1d307457e0778ae9b0d44.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));

kavishka.addCommand({ pattern: 'ff28 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bf886fc083f66fb404ff1.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff29 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/d60199bc191c261497813.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff30 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a4c9fa2db7598d876345b.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff31 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0c87d73846b138193b203.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff32 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/c41f0c5ec4a3874dfd7fe.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff33 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8c082e45671f2726c4010.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff34 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/dd660681c36a3126c590f.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff35 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/6c1412d523455abb2677a.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff36 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/a421f4d85a38545be4926.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff37 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/f0568921ca66fc0b01b83.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff38 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff39 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/91ec01a9b6375b414803c.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff40 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/5e0c5e4999b8aa21c021f.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff41 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0a9ae825b02db2cc591bb.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff42 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/0df898e2ad77b8f69f91c.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff43 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/e354930c0989a3077485e.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff44 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b41fc723da2d9835f0151.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff45 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/bc64365aa73d60de3dcfd.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff46 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/b82196ba630383df9da76.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff47 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/8013933a6603cf2d75f94.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff48 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/4cd1004d8c8f3a800138f.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff49 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/7e9911e44f490fd5ba4bf.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
kavishka.addCommand({ pattern: 'ff50 ?(.*)', fromMe: KSV, dontAddCommandList: true }, (async (message, match) => {

if (match[1] === '' ) return await message.sendMessage(ll);

var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/meme-gen?top=%20⊥=${encodeURIComponent(match[1])}&img=https://telegra.ph/file/816aaa82629bfa202f3d4.jpg`, { responseType: 'arraybuffer' })

await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.AFN })

}));
