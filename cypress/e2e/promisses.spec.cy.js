it ('sem testes', () => {})

const getSomething = (callback) => {
    setTimeout(() => {
        callback(11)
    }, 1000)
}

const system = async() => {
    console.log('init')
    const some = await getSomething()
    console.log(`Something is ${some}`)
    console.log('end')
}

system()