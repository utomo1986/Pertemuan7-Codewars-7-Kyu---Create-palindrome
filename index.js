const _ = require('lodash');
function solve(s){
    return (_.zip(s.split(""), s.split("").reverse())
    .map(e=>(e[0].charCodeAt(0)) - (e[1].charCodeAt(0))).every(v=>v==2||v==0||v==-2));
}