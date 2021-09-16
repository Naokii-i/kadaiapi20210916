$(document).ready(function(){

    let url = "";
    
    $.ajax({
        url: url,
        method: "GET",
        dataType: "JSON",

        beforeSend: function(){
         $(".progress").show();
        },

        complete:function(){
          $(".progress").hide();
        },

        success: function(newsdata){
         let output = "";
         let latestNews = newsdata.articles;
         for(var i in latestNews){
           output +=`
            <div class="col l4 m6 s12">
            <div class="card medium hoverrable">
              <div class="card-image">
                    <img src="${latestNews[i].urlToImage}" class="responsive-img" alt"${latestNews[i].title}">
                </div>
                <div class="card-content">
                       <span class="card-title activator"><i class="material-icons right">read</i></span>
                       <h6 class="turncate"><a href="${latestNews[i].url}" title="${latestNews[i].title}" text="#212121 grey darken-4">${latestNews[i].title}</a></h6>
                       <p><b>出典</b>: ${latestNews[i].author} </p>
                       <p><b>日付</b>: ${latestNews[i].publishedAt} </p>  
                </div>

                <div class="card-reveal">
                      <span class="card-title"><i class="material-icons right">close</i></span>
                      <p><b>Description</b>: ${latestNews[i].description}</p>
                </div>
                    
                <div class="card-action">
                     <a href="${latestNews[i].url}" target="_blank" class="btn"　body bgcolor="#5c6bc0 indigo lighten-1">サイトへ行く</a>
                 </div>
             </div>
            </div>
            `;
          }
            
            if(output !== ""){
              $("#newsResults").html(output);
            }

        },

         error: function() {
            let errorMsg = `<div class="errorMsg center">some error occured</div>`;
            $("#newsResults").html(errorMsg);
        }
    })
     
});
