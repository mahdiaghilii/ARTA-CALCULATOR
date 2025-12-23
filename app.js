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

      const NewUsd = document.getElementById('NewUsd')  //select new price
      NewUsd.innerText = UsdValue+'   $'

      const OldPrice = document.getElementById('OldPrice')
      OldPrice.addEventListener('input' , (e)=>{
            console.log(e.target.value)
      })

      const OldUsd = document.getElementById('OldUsd')
      OldUsd.addEventListener('input' , (e)=>{

      })



      const NewPrice = document.getElementById('NewPrice')
      NewPrice.innerText = Number(OldPrice)/Number(OldUsd)






  })



