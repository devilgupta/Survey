class Form{
    constructor(){
        this.title=createElement('h2');
        this.title1=createElement('h5');
        this.title2=createElement('h5');
        this.title3=createElement('h5');
        this.title4=createElement('h5');
        this.input1=createInput("Option:1");
        this.input2=createInput("Option:2");
        this.input3=createInput("Option:3");
        this.input4=createInput("Name")
        this.button=createButton('Submit');
        this.greeting=createElement('h3');
    }
    updateName(nameofplayer){
        database.ref('/').update({
        name: nameofplayer
        });
        }
    updateQ1(q1ans){
        database.ref('/').update({
            q1:q1ans
            });
        }
    updateQ2(q2ans){
        database.ref('/').update({
            q2:q2ans
        });
    }
    updateQ3(q3ans){
        database.ref('/').update({
             q3:q3ans
         });
        }
        update(){
            database.ref('/').set({
              name:this.name,
              q1:this.q1,
              q2:this.q2,
              q3:this.q3
            });
          }
    
    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.button.hide();
        this.title4.hide();
        this.input4.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("A SURVEY TO BRING CHANGE");
        this.title1.html("Q1. Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? YES OR NO");
        this.title2.html("Q2. Would you be willing to contribute a small amount every month for such program? YES OR NO");
        this.title3.html("Q3. How much per month would you be willing to pay? VALUE");
        this.title.position(400,200);
        this.title1.position(200,300);
        this.input1.position(200,350);
        this.title2.position(200,400);
        this.input1.position(200,450);
        this.title3.position(200,500);
        this.input3.position(200,550);
        this.button.position(200,600);
    this.button.mousePressed(()=>{
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.title1.hide();
        this.title2.hide();
        this.title3.hide();
        this.button.hide();
        this.input4.hide();
        this.title4.hide();
        filler.name=this.input4.value();
        filler.q1=this.input1.value();
        filler.q2=this.input2.value();
        filler.q3=this.input3.value();
        filler.update();
        filler.updateName(name);
        filler.updateQ1(q1);
        filler.updateQ2(q2);
        filler.updateQ3(q3);
        this.greeting.html("Thank You" + player.name);
        this.greeting.position(200,400);
    }
    );

}
}
