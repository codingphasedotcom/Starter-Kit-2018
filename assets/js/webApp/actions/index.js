export const FIRST_ACTION = 'FIRST_ACTION';

export function FirstAction(item){
  return{
    type: FIRST_ACTION,
    payload: item
  }
}
