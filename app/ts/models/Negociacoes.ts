class Negociacoes{

    private _negociacoes: Array<Negociacao> = []

    adciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao)
    }

    paraArray(): Array<Negociacao> {
        return [].concat(this._negociacoes)
    }
}