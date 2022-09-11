const koch_antisnowflake = require('koch-antisnowflake-cli');

const getKochAntiSnowflakeWidth = function(n) {
  if (n === 0) {
    return 1;
  } else if (n === 1) {
    return 5;
  }
  return 3 * getKochAntiSnowflakeWidth(n - 1) + 2;
}

const getWidth = function(n) {
  return 2 * getKochAntiSnowflakeWidth(n) + 1;
}

const getKochAntiSnowflakeHeight = function(n) {
  if (n === 0) {
    return 1;
  }
  return parseInt(getKochAntiSnowflakeWidth(n) / 2) + 1;
}

const getHeight = function(n) {
  return getKochAntiSnowflakeHeight(n) * 2;
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const snowflakeToBoard = function(data) {
  const parts = data.split('\n').filter(p => p.length > 1);
  let board = [];
  for (let i = 0; i < parts.length; i++) {
    let row = [];
    for (let j = 1; j < parts[i].length; j++) {
      row.push(parts[i].charAt(j));
    }
    board.push(row);
  }
  return board;
}

const insertAntiSnowflake = function(position, antiSnowflakeBoard, triflakeBoard) {
  for (let i = 0; i < antiSnowflakeBoard.length; i++) {
    for (let j = 0; j < antiSnowflakeBoard[i].length; j++) {
      triflakeBoard[position.y + (antiSnowflakeBoard.length - i - 1)][position.x + j] = antiSnowflakeBoard[i][j];
    }
  }
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || n < 0) {
    return '';
  }
  
  let size = n;
  if (config && config.size && config.size > n) {
    size = config.size;
  }

  const character = config !== undefined && config.character !== undefined && config.character.length === 1 ? config.character : undefined;

  const triflakeBoard = createBoard(getWidth(size), getHeight(size));
  const antiSnowflake = koch_antisnowflake.create(n, { size: size, character: character });
  const antiSnowflakeBoard = snowflakeToBoard(antiSnowflake);

  insertAntiSnowflake({ x: 0, y: 0 }, antiSnowflakeBoard, triflakeBoard);
  insertAntiSnowflake({ x: parseInt(getWidth(size) / 2) + 1 , y: 0 }, antiSnowflakeBoard, triflakeBoard);
  insertAntiSnowflake({ x: parseInt(getWidth(size) / 4) + 1 , y: parseInt(getHeight(size) / 2) }, antiSnowflakeBoard, triflakeBoard);

  return draw(triflakeBoard);

}

module.exports = {
  create: create
};