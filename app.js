fetch("https://api.nerkh.io/v1/prices/json/currency/USD", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer Urh1Zq90BFNg-QOz9wUyO5Aop-X0pK3URRL10k0WWzU="
  }
})
  .then(res => res.json())
  .then(data => {

    let UsdValue = data.data.prices.USD.current

      const NewUsd = document.getElementById('NewUsd')       //select new price
      NewUsd.innerText = 'Today Price:      '+UsdValue+'$'

      const OldPrice = document.getElementById('OldPrice')
      OldPrice.addEventListener('input' , (e)=>{

      })

      const OldUsd = document.getElementById('OldUsd')
      OldUsd.addEventListener('input' , (e)=>{

      })


      const Calculat = document.getElementById('Calculat')
      Calculat.addEventListener('click' , (e)=>{
        let finalPrice1 = Number(OldPrice.value/OldUsd.value*UsdValue)  //calculat new price

        let RoundPrice = Math.round(finalPrice1)
        
        NewPrice.innerText = 'تومان'+RoundPrice.toLocaleString("en-US")
      })

      const NewPrice = document.getElementById('NewPrice')              //select NewPrice
    




  })



