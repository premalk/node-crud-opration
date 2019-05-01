var mysql = require('mysql');
App = () => {};
con = mysql.createConnection({
    host:"localhost",
    username:"root",
    password:"",
    database:"test_database"
});
database = 'test_database';
table = ' tbl_movie ';
App.RouterHandler = (q,cb) => {
    var params = q.query;
    con.connect((err)=>{
        if(err) { console.log(err) }
        console.log('Database Connected');
    });
    var movie_summary = params.movie_summary || '';
    var movie_summary = params.movie_summary || '';
    var values = {movie_id:'',movie_title:'','movie_category':'','movie_year':'','movie_summary':'','user_id':'','user_name':''};
    values.movie_id = params.movie_id;
    values.movie_title = params.movie_title || '';
    values.movie_category = params.movie_category || '';
    values.movie_year = params.movie_year || '';
    values.movie_summary = params.movie_summary || '';
    values.user_id = params.user_id || '';
    values.user_name = params.user_name || '';
    switch(params.action){
        case 'select':
        App.select(values);
        break;
        case 'insert':
        App.insert(values);
        break;
        case 'update':
        App.update(values);
        break;
        case 'delete':
        App.delete(values);
        break;
    }
}
App.insert = (q) => {
    ins_quer = "insert into "+table+" set movie_id='"+q.movie_id+"', movie_title='"+q.movie_title+"',movie_category='"+q.movie_category+"',user_id='"+q.user_id+"',user_name='"+q.user_name+"',movie_year='"+q.movie_year+"',movie_summary='"+q.movie_summary+"'";
    console.log(ins_quer);
    con.query(ins_quer, (err, result)=>{
        if(err) throw err;
        console.log('Row affected');
    })
}
App.select = (q) => {
    if(q.movie_id!=undefined && q.movie_id!=''){
        whereCondi = " where movie_id= '"+q.movie_id+"'";
    }
    else{
        whereCondi ='';
    }
    sel_quer = "select * from "+table+" "+whereCondi;
    console.log(sel_quer);
    con.query(sel_quer, async (err, result)=>{
        if(err) throw err;
        console.log('Row found');
        console.log(result);
    })
}
App.update = (q) => {
    if(q.movie_id!=undefined && q.movie_id!=''){
        whereCondi = " where movie_id= '"+q.movie_id+"'" || "";
        update_quer = "update "+table+" set movie_title='"+q.movie_title+"',movie_category='"+q.movie_category+"',user_id='"+q.user_id+"',user_name='"+q.user_name+"',movie_year='"+q.movie_year+"',movie_summary='"+q.movie_summary+"' "+whereCondi;
        console.log(update_quer);
        con.query(update_quer, (err, result)=>{
            if(err) throw err;
            console.log('Row affected');
        })
    }
    else{
        whereCondi ='';
        console.log('Movie id is missing.');
    }
}
App.delete = (q) => {
    if(q.movie_id!=undefined && q.movie_id!=''){
        whereCondi = " where movie_id= '"+q.movie_id+"'" || "";
        delete_que = "delete from "+table+whereCondi;
        console.log(delete_que);
        con.query(delete_que, (err, result)=>{
            if(err) throw err;
            console.log('Row affected');
        })
    }
    else{
        console.log('Movie id is missing.');
    }
}
module.exports = App;