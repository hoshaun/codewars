/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/

function rgb(r, g, b){  
  let hexR = (r < 0 ? 0 : Math.min(r, 255)).toString(16).toUpperCase();
  let hexG = (g < 0 ? 0 : Math.min(g, 255)).toString(16).toUpperCase();
  let hexB = (b < 0 ? 0 : Math.min(b, 255)).toString(16).toUpperCase();
  
  hexR = hexR.length === 1 ? '0' + hexR : hexR;
  hexG = hexG.length === 1 ? '0' + hexG : hexG;
  hexB = hexB.length === 1 ? '0' + hexB : hexB;
  
  return hexR + hexG + hexB;
}
