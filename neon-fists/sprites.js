// Fighter pixel art for Neon Fists, drawn from text. Every pose is 16x22 = HEAD (6) + TORSO (8) + LEGS (8).
// 'e' gi colour, 'f' pants colour, 'h' hair colour, 'x' heart highlight, '.' transparent.
const NF=(()=>{
const pal={s:'#f2b27a',y:'#ffd23f',b:'#1a1230',k:'#1a0f2e',w:'#fff'};
const make=(rows,c,hi='#fff')=>{const cv=document.createElement('canvas'),s=cv.getContext('2d');cv.width=rows[0].length;cv.height=rows.length;
  rows.forEach((r,j)=>[...r].forEach((ch,i)=>{const col=ch=='e'?c.e:ch=='f'?c.f:ch=='h'?c.h:ch=='x'?hi:pal[ch];if(col){s.fillStyle=col;s.fillRect(i,j,1,1)}}));return cv};
const HEAD=['.....hhhhh......','....hhhhhhh.....','....hsssssh.....','....hssksss.....','.....ssssss.....','......sss.......'];
const TG=['....eeeeeeee....','...eeeeeeeeess..','...eeeeeeeeess..','....eeeeeeee....','....eeeeeeee....','....yyyyyyyy....','....ffffffff....','....ffffffff....'];
const TP=['....eeeeeeee....','....eeeeeeeeeess','....eeeeeeee....','....eeeeeeee....','....eeeeeeee....','....yyyyyyyy....','....ffffffff....','....ffffffff....'];
const TB=['....eeeeeeeesss.','....eeeeeeeesss.','....eeeeeeeesss.','....eeeeeeeee...','....eeeeeeee....','....yyyyyyyy....','....ffffffff....','....ffffffff....'];
const TH=['...eeeeeeee.....','..eeeeeeeeee....','..eeeeeeeeee....','...eeeeeeee.....','...eeeeeeee.....','...yyyyyyyy.....','....ffffffff....','....ffffffff....'];
const LS=['....fff..fff....','....fff..fff....','....fff..fff....','....fff..fff....','....fff..fff....','....fff..fff....','....bbb..bbb....','...bbbb..bbbb...'];
const LW=['....fff..fff....','....fff..fff....','...fff....fff...','...fff....fff...','..fff......fff..','..fff......fff..','..bbb......bbb..','.bbbb......bbbb.'];
const LK=['....fff.fffff...','....fff...ffffbb','....fff.....bbbb','....fff.........','....fff.........','....fff.........','....bbb.........','...bbbb.........'];
const HR=['.ee.ee.','exeeeee','eeeeeee','.eeeee.','..eee..','...e...'];
const poses=c=>{const m=r=>make(r,c);return{idle:m(HEAD.concat(TG,LS)),walk:m(HEAD.concat(TG,LW)),punch:m(HEAD.concat(TP,LS)),kick:m(HEAD.concat(TG,LK)),block:m(HEAD.concat(TB,LS)),hurt:m(HEAD.concat(TH,LS))}};
return{make,poses,heart:[make(HR,{e:'#ff2d55'}),make(HR,{e:'#2b1b5e'},'#2b1b5e')],pc:{e:'#ff4d4d',f:'#26306b',h:'#2b1b14'},
  opp:[{n:'KAI',e:'#3b82f6',f:'#1e3a8a',h:'#111'},{n:'MEI',e:'#22c55e',f:'#14532d',h:'#d11'},{n:'TORO',e:'#f59e0b',f:'#7c2d12',h:'#eee'},{n:'ONI',e:'#a855f7',f:'#3b0764',h:'#ff2d55'}]};
})();
