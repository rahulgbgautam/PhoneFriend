import { Component  , OnInit } from '@angular/core';

import * as $ from 'jquery'

 /* for using jquery we does use these (2-package)
 
 npm install jquery --save
  npm install @types/jquery
 
and also we needs to import jquery in perticular page  
 */
 
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() {}
  
   ngOnInit(){

    $(document).ready(function(){
      $("#list1").toggle();      
      $("#hide1").click(function(){
        $("#list1").toggle();
      
      });
    });

    $(document).ready(function(){
      $("#list2").toggle();
      $("#hide2").click(function(){
        $("#list2").toggle();
      
      });
    });

    $(document).ready(function(){
      $("#list3").toggle();
      $("#hide3").click(function(){
        $("#list3").toggle();
      
      });
    });

    $(document).ready(function(){
      $("#list4").toggle();
      $("#hide4").click(function(){
        $("#list4").toggle();
      
      });
    });


    $(document).ready(function(){

        $("#div1").delay("slow").fadeIn();
        $("#upper1").delay("slow").fadeIn();
        $("#upper2").delay("fast").fadeIn();
        $("#upper3").delay(800).fadeIn();

      });
 


  }

}
