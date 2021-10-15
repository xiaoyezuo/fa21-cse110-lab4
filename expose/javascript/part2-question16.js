
for (var property in statistics){
    if (property.indexOf('r') == 0 || statistics[property]%2 == 1){
       console.log(statistics[property]) 
    }
}