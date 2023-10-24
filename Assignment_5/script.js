$(document).ready(function () {

    class ContentItem {
        // These are 4 specific properties to content item. 
        id;
        name;
        description;
        categoryGenre;
    
        // constructor that accepts the values for the 4 properties
        //conatructor sets all values to class version of propertise
        constructor(id,name,description,categoryGenre){
            this.id = id;
            this.name = name;
            this.description = description;
            this.categoryGenre = categoryGenre;
          }

        //methods updates  content item that accepts properties 
        // this thing match the constructor property to  class property and checked the value is that not Null
        // it does not update the property if it is not same.!= not null
        updateContentItem(id,name,description,categoryGenre){
            if((this.id == id) && (name != null) && (description != null) && (categoryGenre != null)){
                this.name = name;
                this.description = description;
                this.categoryGenre = categoryGenre;
            }
        }
        // This is the tostring method that outputs the string of html for content items.
        // used to get the string values
        // this define how our html will gonna display
        tostring() {
            $('#content-item-list').append(
                '<div class ="content-item-wrapper"id= "content-item-ID' +this.id +'">'+
                 '<h2>Name:- '+ this.name+'</h2>'+
                 '<p>Description :- '+ this.description+' </p>'+
                 '<div>categoryGenre :- '+ this.categoryGenre+' </div>'+
                  '</div>');
         
        }
    }
    // creted  a list of Cricketers
    let allcrickters = [
        {
        id : '1',
        name : 'M.S. Dhoni',
        description : 'Cricketer',
        categoryGenre : 'Wicket Kepeer' 
      },
      {
        id : '2',
        name : 'Virendera Sehwag',
        description : 'batsman',
        categoryGenre : 'Fast-Paced' 
      },
      {
        id : '3',
        name : 'Hardik Pandya',
        description : 'Bowler',
        categoryGenre : 'Fast-Bowler' 
    },
      {
        id : '4',
        name : 'Jadeja',
        description : 'Fielder',
        categoryGenre : 'Over Boundary' 
    },
      {
        id : '5',
        name : 'Raina Aj',
        description : 'Left-Arm-Batsman',
        categoryGenre : 'Under Boundary' 
      }
    ]
    // used for loop  to connect index 
    // and used this to display data in string (html)
    for(i = 0; i < allcrickters.length; i++){
      $('#content-item-list').append(
  '<div class ="content-item-wrapper"id= "content-item-' +allcrickters[i].id + '">'+
   '<h4>Name:- '+ allcrickters[i].name+'</h4>'+
   '<p>Description :- '+ allcrickters[i].description+' </p>'+
   '<div> CategoryGenre :- '+ allcrickters[i].categoryGenre+' </div>'+
    '</div>'); 
  };
        // Used jquery for styling of data
        for(i = 0; i < allcrickters.length; i++){
        $('#content-item-list').css({
          padding: '17px', 
          margin: '45px auto',
          border: '5px solid green ',
          width: '250px', 
            
         } )};
        
});
