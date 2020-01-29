export const getSpaceships = async () => {
  let count = 1;
  let spaceshipList = []
  while (count <= 4) {
    let res = await fetch(`https://swapi.co/api/starships/?page=${count}`);
    const resJson = await res.json();
    spaceshipList = spaceshipList.concat(resJson.results.map(spaceship => ({
      name: spaceship.name,
      MGLT: spaceship.MGLT,
    })
    ));
    count++;
  }
  
  return await spaceshipList;
};

