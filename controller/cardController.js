exports.getCard = (req,res) => {
    res.send(`
        <form action="/cards" method="post">
            <input type="text"name="text">
            <input type="submit">
        </form>
    `)
}

exports.addCard = (req,res) => {
    console.log(req.body)
    res.send('add card')
    
}

exports.delCards = (req,res) => {
    res.send('delete card')
}

exports.updCards = (req,res) => {
    res.send('update card')
}

exports.getCards = (req,res) => {
    res.send('get all cards')
}


