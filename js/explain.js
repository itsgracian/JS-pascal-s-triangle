function pascalSimple(numTiers) {

  var triangle = [
    [1]
  ],
  tier;

  for (var j = 0; j < numTiers-1; j++) {
    tier = [1];
    for (var k = 1; k < triangle[j].length; k++) {
      tier[k] = triangle[j][k] + triangle[j][k-1];
    }
    tier.push(1);
    triangle.push(tier);
  }

  return triangle;
}

/*var triangle=[
  [1]
],rep;

for(var i=0; i<number-1;i++)
  {
    rep=[1];
    //@for
    for(var j=1; j < triangle[i].length; j++ ){
      rep[j]=triangle[i][j]+triangle[i][j-1];
    }
   rep.push(1);
   triangle.push(rep);
  }
 console.log(triangle);*/
