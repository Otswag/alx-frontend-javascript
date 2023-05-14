"use strict";

export function taskFirst() {

  const task = 'I prefer const when I can.'; // Use const instead of var

  return task;

}

export function getLast() {

  return ' is okay';

}

export function taskNext() {

  let combination = 'But sometimes let'; // Use let instead of var

  combination += getLast();

  return combination;

}
