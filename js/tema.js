var tema = false;
function Dark()
{

    document.getElementById('navbar').classList.remove('plava_tamna')
    document.getElementById('navbar').classList.add('tt_plava_tamna')
    
    document.getElementById('footer').classList.remove('plava_tamna')
    document.getElementById('footer').classList.add('tt_plava_tamna')
    
    document.getElementById('body').classList.remove('plava')
    document.getElementById('body').classList.add('tt_plava')

    if(document.getElementById('button')){
    document.getElementById('button').classList.remove('plava_tamna')
    document.getElementById('button').classList.add('tt_plava_tamna')
    }

    if(document.getElementById('button2')){
    document.getElementById('button2').classList.remove('plava_tamna')
    document.getElementById('button2').classList.add('tt_plava_tamna')
    }

    if(document.getElementById('button3')){
    document.getElementById('button3').classList.remove('plava_tamna')
    document.getElementById('button3').classList.add('tt_plava_tamna')
    }
    
    if(document.getElementById('button4')){
    document.getElementById('button4').classList.remove('plava_tamna')
    document.getElementById('button4').classList.add('tt_plava_tamna')
    }

    if(document.getElementById('div2')){
    document.getElementById('div2').classList.remove('plava_svetla')
    document.getElementById('div2').classList.add('tt_plava_svetla')
    
    document.getElementById('div2').classList.remove('text-dark')
    document.getElementById('div2').classList.add('text-light')
    }

    if(document.getElementById('div3')){
    document.getElementById('div3').classList.remove('plava_svetla')
    document.getElementById('div3').classList.add('tt_plava_svetla')
        
    document.getElementById('div3').classList.remove('text-dark')
    document.getElementById('div3').classList.add('text-light')
    }

    if(document.getElementById('div4')){
    document.getElementById('div4').classList.remove('plava_svetla')
    document.getElementById('div4').classList.add('tt_plava_svetla')    
    
    document.getElementById('div4').classList.remove('text-dark')
    document.getElementById('div4').classList.add('text-light')
    }

    tema=true;

}
function Light()
{

    document.getElementById('navbar').classList.remove('tt_plava_tamna')
    document.getElementById('navbar').classList.add('plava_tamna')

    document.getElementById('footer').classList.remove('tt_plava_tamna')
    document.getElementById('footer').classList.add('plava_tamna')
    
    document.getElementById('body').classList.remove('tt_plava')
    document.getElementById('body').classList.add('plava')

    if(document.getElementById('button')){
    document.getElementById('button').classList.remove('tt_plava_tamna')
    document.getElementById('button').classList.add('plava_tamna')
    }

    if(document.getElementById('button2')){
    document.getElementById('button2').classList.remove('tt_plava_tamna')
    document.getElementById('button2').classList.add('plava_tamna')
    }

    if(document.getElementById('button3')){
    document.getElementById('button3').classList.remove('tt_plava_tamna')
    document.getElementById('button3').classList.add('plava_tamna')
    }
    
    if(document.getElementById('button4')){
    document.getElementById('button4').classList.remove('tt_plava_tamna')
    document.getElementById('button4').classList.add('plava_tamna')
    }

    if(document.getElementById('div2')){
    document.getElementById('div2').classList.remove('tt_plava_svetla')
    document.getElementById('div2').classList.add('plava_svetla')
        
    document.getElementById('div2').classList.remove('text-light')
    document.getElementById('div2').classList.add('text-dark')
    }

    if(document.getElementById('div3')){
    document.getElementById('div3').classList.remove('tt_plava_svetla')
    document.getElementById('div3').classList.add('plava_svetla')
            
    document.getElementById('div3').classList.remove('text-light')
    document.getElementById('div3').classList.add('text-dark')
    }
    if(document.getElementById('div4')){
    document.getElementById('div4').classList.remove('tt_plava_svetla')
    document.getElementById('div4').classList.add('plava_svetla')
        
    document.getElementById('div4').classList.remove('text-light')
    document.getElementById('div4').classList.add('text-dark')
    }
    tema=false;

}
function toggleTheme()
{
    tema ? Light() : Dark();
}