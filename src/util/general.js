export function getPlatform(){
    let platForm = "";
  
    if (window.innerWidth > 667) {
        platForm = "web";
      } else {
        platForm = "api";
      }
  
      return platForm;
  }


export function getUrl(phone, nome, endereco, complemento, itemsOrder, dadosPagamento, total) {
    const platform = getPlatform(); //alterar telefone
    let url = `https://${platform}.whatsapp.com/send?phone=${phone}&text=`;
  
    let msg =
      `*Cliente:* ${nome}` +
      `%0A*Endereço:* ${endereco}` +
      `%0A*Complemento:* ${complemento}` +
      `%0A ${itemsOrder}` +
      `%0A%0A*Total:* R$ ${total}`+
      `%0A%0A*Método de pagamento:* ${dadosPagamento.selected}`+
      `%0A*Troco Para:* ${dadosPagamento.value ? "R$ " + dadosPagamento.value: "Não informado" }`;

    url = url + msg;

    return url;
  };


export function getItemsOrderFromProps(products) {
    const items = products.map((el) => {
      const arrayItems = [];
      if (el.qtd > 0) { //refrigerantes
        const subTotalItem = (el.qtd * el.value).toFixed(2);
        const { nameItem, qtd, size } = el;

        arrayItems.push({ nameItem: `${nameItem} ${size}`, qtd, subTotalItem });
      }
      if (el.qtdG > 0) {
        const subTotalItem = (el.qtdG * el.valueG).toFixed(2);
        const { nameItem, qtdG } = el;

        arrayItems.push({ nameItem: `${nameItem} G`, qtd: qtdG, subTotalItem });
      }
      if (el.qtdM > 0) {
        const subTotalItem = (el.qtdM * el.valueM).toFixed(2);
        const { nameItem, qtdM } = el;

        arrayItems.push({ nameItem: `${nameItem} M`, qtd: qtdM, subTotalItem });
      }
      if (el.qtdP > 0) {
        const subTotalItem = (el.qtdP * el.valueP).toFixed(2);
        const { nameItem, qtdP } = el;

        arrayItems.push({ nameItem: `${nameItem} P`, qtd: qtdP, subTotalItem });
      }
      if (el.observation) {
        const { observation } = el;
        arrayItems.push({ observation });
      }

      return arrayItems;
    });
    
    return items; //retorna uma lista de arrays de itens
};


export function makeTextMessage(arrayItems){
    let itemsOrderInText = "";
    arrayItems.forEach((item) => {
        item.forEach((elem) => {
          if (elem.hasOwnProperty("observation")) {
            itemsOrderInText += `%0A*Observação:* ${elem.observation}%0A`;
          } else {
            itemsOrderInText += `%0A*Item:* ${elem.nameItem} *qtd:* ${elem.qtd} *subTotal:* ${elem.subTotalItem}`;
          }
        });
      });

    return itemsOrderInText;
}