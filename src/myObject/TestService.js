const Tsvc = {
    casualString : () => {
        const helloString = ['Buongiorno','Buonasera','Buonanotte'];
        const casualIndex = Math.floor(Math.random() * helloString.length)
        return helloString[casualIndex];
    }
}

export default Tsvc