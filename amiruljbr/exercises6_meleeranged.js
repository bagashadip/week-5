function meleeRangedGrouping (str) {
  //your code here
  console.log(str);
  var hasil = [];
  //ubah array antar hero
  var arrHero =[];
  var hero=[''];
  var x = true;
  for (var i=0; i<str.length+1;i++){
    if (str[i]==','||i==str.length){
      arrHero.push(hero);
      hero=[''];
      x=true;
    } else if (x && str[i]!='-') {
      hero[0] += str[i];
    } else if (str[i]=='-'){
      hero.push('')
      x=false;
    } else {
      hero[1] += str[i];
    }
  }

  var groupRanged = [];
  var groupMelee =[];
  for (var i=0;i<arrHero.length;i++){
    if (arrHero[i][1]=='Ranged'){
      groupRanged.push(arrHero[i][0])
    } else if (arrHero[i][1]=='Melee') {
      groupMelee.push(arrHero[i][0])
    }
    if (i==arrHero.length-1 && (groupMelee.length!=0 || groupRanged.length!=0)){
      hasil.push(groupRanged,groupMelee);
    }
  }
  return hasil;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
console.log(meleeRangedGrouping('gfagfafsadfas')); // []