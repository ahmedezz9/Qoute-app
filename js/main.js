function generateQou(){
    var qoute =['“Be yourself; everyone else is already taken.”','“So many books, so little time.”','“A room without books is like a body without a soul.”','“You only live once, but if you do it right, once is enough.”','“A friend is someone who knows all about you and still loves you.”','“Live as if you were to die tomorrow. Learn as if you were to live forever.”','“I am so clever that sometimes I dont understand a single word of what I am saying.”','“It is better to be hated for what you are than to be loved for what you are not.”','“Twenty years from now you will be more disappointed by the things that you didnt do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.”','“It is better to be hated for what you are than to be loved for what you are not.”','“I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.”'];

    var ran =Math.random()*10;
    var approximate = Math.ceil(ran);

    document.getElementById('qoute').innerHTML = qoute[approximate];
}


