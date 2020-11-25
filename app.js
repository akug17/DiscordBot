const Discord = require('discord.js');
const { SAY_HELLO, HELLO_ABUSE } = require('./MessageList');
const client = new Discord.Client()
client.login('NzgxMTU5MjgwOTAzOTc5MDM4.X75lRQ.xEx-qo5mqwqse5B9GG01YGYfn9Q');
client.once('ready',()=>{
    console.log('Bot Online')
})
const prefix ='$';
client.on('message',message=>{
    if(!message.content.startsWith(prefix) || message.author.bot) return ;
    console.log(message.content)
    const args = message.content.slice(prefix.length).split(/ +/);
    console.log(args,"ARGS")
    const command = args.shift().toLowerCase()
    console.log(command,"COMMAND",message.author)
    if(command==='hello'){
        console.log('here')
      
        message.channel.send(`Hello ko gand me de dunga ${returnAuthor(message.author)} behan ke lode`)
        
    }else if(command==='wassup'){
        message.channel.send(`Shut the fuck up ${returnAuthor(message.author)} noob`,{
            tts:true
        })
    }else if (command==='embarrassmehul'){
        message.channel.send(`Mehul loves someone, you know who she is`,{
            tts:true
        })
    }
    switch(command){

        case SAY_HELLO:
            console.log('here')
            message.channel.send(HELLO_ABUSE)

    }
})
const returnAuthor =(author)=>{
    if(author.username==='Devastator_IND'){
        return 'Mehul'
    }else if(author.username==='lalbadshah29'){
        return 'Tanmoy'
    }else if(author.username==='dubiouswarrior'){
        return 'Shubham'
    }else if(author.username==='Hitman16'){
        return 'Hitansh'
    }else if(author.username==='BROGETA'){
        return 'Akash'
    }else if(author.username==='Captain hook'){
        return 'Kinchit'
    }else if(author.username==='mridul' || author.username==="PR0_RA|\|G3R_!|\|D"){
        return 'Manu'
    }else if(author.username==='KickAss'){
        return 'Nikhil'
    }else if(author.username==='Don Bhai'){
        return 'Naman'
    }else {
        return author.username
    }
}