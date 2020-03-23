function findMyHoro()
{
	var date=document.getElementById("dates").value;
	var month=document.getElementById("month").value;
	var type=document.getElementById("today").value;
	
	var sunsign=findSunsign(date,month);
	
	var xmlhttp = new XMLHttpRequest();
	var xmlhttp1= new XMLHttpRequest();//gets the contents of the json file line 61
	xmlhttp.onreadystatechange = function() 
	{
		if(this.readyState <=3)
		{
		//	document.getElementById('statusText').innerHTML="Loading...";
		}
		if (this.readyState == 4 && this.status == 200)
		{
			//document.getElementById('statusText').innerHTML="jhjhjlgh";
			var json = JSON.parse(this.responseText);//gets content from the server in the form of string...here it gets converted to js object	
			document.getElementById("description").value=json.horoscope;
		}
      };
      
      xmlhttp1.onreadystatechange = function() 
  	{
  		if(this.readyState <=3)
  		{
  		//	document.getElementById('statusText').innerHTML="Loading...";
  		}
  		if (this.readyState == 4 && this.status == 200)
  		{
  			//document.getElementById('statusText').innerHTML="jhjhjlgh";
  			var json1 = JSON.parse(this.responseText);//gets content from the server in the form of string...here it gets converted to js object	
  			for(var i=0;i<json1['Horoscopes']['Signs'].length;i++)
  	      {
  	    	  if(json1['Horoscopes']['Signs'][i]['Horoscope']===sunsign)
  	    	  {
  	    		  document.getElementById("image").src=json1['Horoscopes']['Signs'][i]['image'];
  	    		  break;
  	    	  }
  	    	  
  	      }
  		}
        };
      
	if(type=="today")
		{
	xmlhttp.open("GET", "http://horoscope-api.herokuapp.com/horoscope/today/"+sunsign, true);
		}
	else if(type=="weekly")
		{
		xmlhttp.open("GET", "http://horoscope-api.herokuapp.com/horoscope/week/"+sunsign, true);
		}
	else
		{
		xmlhttp.open("GET", "http://horoscope-api.herokuapp.com/horoscope/month/"+sunsign, true);
		}
		
	xmlhttp1.open("GET", "Horoscopes.json", true);
	xmlhttp.send();
	xmlhttp1.send();
}

function findSunsign(day,month)
{
	var d=new Date();
    var date=month+"/"+day+"/"+d.getFullYear();
    var req=new Date(date);
    
    if(new Date("03/21/20")<=req && req<=new Date("04/20/20"))
    {
    	      return "Aries";
    }
    else if(new Date("04/21/20")<=req && req<=new Date("05/20/20"))
    {
    	return "Taurus";
    }
    else if(new Date("05/21/20")<=req && req<=new Date("06/20/20"))
    {
    	return "Gemini";
    }
}