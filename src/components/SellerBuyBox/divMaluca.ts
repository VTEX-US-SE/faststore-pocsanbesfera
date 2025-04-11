const divMaluca = ({
  ponto1,
  ponto2,
  ponto3,
  ponto4,
  ponto5,
  preco1,
  preco2,
  preco3,
  cpp,
}: any) => `
<div class="-cardpdpvaluebox">
    <div class="-boxheader">
        <div class="-headertitle">Resgate com pontos</div>
            <div class="util-flex-nospace -discountcontainer">
                <p class="-customoption">
                    <input type="radio" id="inputPrice100" name="optionprice" selected class="custom-radio" data-bind="
                            click: $parent.checkRangeCpp(event, $data, $index()), 
                            load: $parent.checkRangeCpp(event, $data), 
                            attr: {id: 'optionprice' + $index(), 
                            disabled: !$parent.enableAddCartAndChecks()}">
                    <label data-bind="attr: {for: 'optionprice' + $index()}" for="inputPrice100"></label>
                </p>
                <div class="-containerprice">
                    <span class="-oldprice">
                        <text data-bind="currency: {price: $parent.getSelectedSKUPrices().listPrice,
                            currencyObj: {'currencyCode': '', 'fractionalDigits': 0, 'symbol': ''}}">${formatPoints(
                              ponto1
                            )}</text>
                    </span>
                    <div class="-valueboxitem -newvalue">
                        <text data-bind="currency: {price: $data.amountPTS, currencyObj: {'currencyCode': '', 'fractionalDigits': 0, 'symbol': ''}}">${formatPoints(
                          ponto2
                        )}</text>
                    </div>
                </div>
            </div>
    </div>
    <div class="-boxcontent">
        <div class="-contenttitle">
            Resgate com <strong>Pontos<span>&amp;</span>Dinheiro</strong> 
            <span class="-info js-openmodal-info" data-toggle="modal" data-target="#mdlInfoPoints">i</span>
        </div>

            <div class="util-flex-nospace -inputbox">
                <p class="-customoption">
                    <input type="radio" id="inputPrice80" name="optionprice" selected class="custom-radio" data-bind="
                            click: $parent.checkRangeCpp(event, $data, $index()), 
                            load: $parent.checkRangeCpp(event, $data), 
                            attr: {id: 'optionprice' + $index(), 
                            disabled: !$parent.enableAddCartAndChecks()}">
                    <label data-bind="attr: {for: 'optionprice' + $index()}" for="inputPrice80"></label>
                </p>
                <div class="-valueboxitem">
                    <text data-bind="currency: {price: $data.amountPTS, currencyObj: {'currencyCode': '', 'fractionalDigits': 0, 'symbol': ''}}">${formatPoints(
                      ponto3
                    )}</text> 
                    <span data-bind="text: '+ '">+ </span>
                    <span data-bind="currency: { price: $data.amountBRL,
                        currencyObj: {
                        currencyCode: 'BRL',
                        fractionalDigits: 2,
                        symbol: 'R$ '},
                        nullReplace: 0}">${formatCash(preco1)}</span>
            
                </div>
            </div>
            <div class="util-flex-nospace -inputbox">
                <p class="-customoption">
                    <input type="radio" id="inputPrice70" name="optionprice" selected class="custom-radio" data-bind="
                        click: $parent.checkRangeCpp(event, $data, $index()), 
                        load: $parent.checkRangeCpp(event, $data), 
                        attr: {id: 'optionprice' + $index(), 
                        disabled: !$parent.enableAddCartAndChecks()}">
                    <label data-bind="attr: {for: 'optionprice' + $index()}" for="inputPrice70"></label>
                </p>
                <div class="-valueboxitem">
                    <text data-bind="currency: {price: $data.amountPTS, currencyObj: {'currencyCode': '', 'fractionalDigits': 0, 'symbol': ''}}">${formatPoints(
                      ponto4
                    )}</text>
                    <span data-bind="text: '+ '">+ </span>
                    <span data-bind="currency: { price: $data.amountBRL,
                        currencyObj: {
                        currencyCode: 'BRL',
                        fractionalDigits: 2,
                        symbol: 'R$ '},
                        nullReplace: 0}">${formatCash(preco2)}</span>
            
                </div>
            </div>
            <div class="util-flex-nospace -inputbox">
                <p class="-customoption">
                    <input type="radio" id="inputPrice60" name="optionprice" selected class="custom-radio" data-bind="
                        click: $parent.checkRangeCpp(event, $data, $index()), 
                        load: $parent.checkRangeCpp(event, $data), 
                        attr: {id: 'optionprice' + $index(), 
                        disabled: !$parent.enableAddCartAndChecks()}">
                    <label data-bind="attr: {for: 'optionprice' + $index()}" for="inputPrice60"></label>
                </p>
                <div class="-valueboxitem">
                    <text data-bind="currency: {price: $data.amountPTS, currencyObj: {'currencyCode': '', 'fractionalDigits': 0, 'symbol': ''}}">${formatPoints(
                      ponto5
                    )}</text> 
                    <span data-bind="text: '+ '">+ </span>
                    <span data-bind="currency: { price: $data.amountBRL,
                        currencyObj: {
                        currencyCode: 'BRL',
                        fractionalDigits: 2,
                        symbol: 'R$ '},
                        nullReplace: 0}">${formatCash(preco3)}</span>
            
                        <span class="-target">Recomendado</span>
                </div>
            </div>
    </div>
</div>`

export function formatCash(cash: any) {
  const cashText =
    cash > 0
      ? 'R$ ' +
        new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(cash)
      : ''
  return cashText
}

export function formatPoints(points: any) {
  const pointsText =
    points > 0 ? `${Math.round(points).toLocaleString('pt-BR')} pts` : ''

  return pointsText
}

export default divMaluca
