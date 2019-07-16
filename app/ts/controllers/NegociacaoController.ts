class NegociacaoController{

    private _inputData: HTMLInputElement
    private _inputQuantidate: HTMLInputElement
    private _inputValor: HTMLInputElement
    private _negociacoes = new Negociacoes()
    private _negociacoesView = new NegociacoesView('#negociacoesView')

    constructor() {
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputQuantidate = <HTMLInputElement>document.querySelector('#quantidade')
        this._inputValor = <HTMLInputElement>document.querySelector('#valor')
        this._negociacoesView.update(this._negociacoes)
    }

    adiciona(event: Event){
        event.preventDefault();
        
        const negociacao = new Negociacao( 
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidate.value),
            parseFloat(this._inputValor.value)
        );
        
        // console.log(negociacao)
        this._negociacoes.adciona(negociacao)
        console.log(this._negociacoes)

        this._negociacoes.paraArray()
            .forEach(element => {
            console.log (element)
            console.log (element.volume)
            })
        
        this._negociacoesView.update(this._negociacoes)
            
    }
}