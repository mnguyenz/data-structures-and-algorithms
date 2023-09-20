-- OR
SELECT 
  name, population, area
FROM
  World
WHERE
  area >= 3000000 OR population >= 25000000

-- UNION
SELECT name, population, area
FROM World
WHERE area > 3000000 
UNION
SELECT name, population, area
FROM World
WHERE population > 25000000

-- Using UNION is faster when it comes to cases like scan two different column