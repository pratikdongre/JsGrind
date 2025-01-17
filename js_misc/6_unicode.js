/*
Uniode,string internals 

as we already know 
js strings are  based on unicode 
each character is rerepsented by a byte sequenc of 1-4 bytes 
js allows us to insert a character into a string by speicfying its hexadceimal unicode wiht one of therse three notation 

\xXX
 
XX must be thow hexadecimal support only hex digits it can be used only for the first 256 unicode chars 

thesre first 256 include latin alphasbest most basic syntax cahr and some other 

*/
{
    console.log("\x7A");
    console.log("\xA9");

    
}

/*
\uXXXX 
XXXX must be exactly 4 hex digits with value between 0000 and FFFF 
then \uXXX is the char whoce unicode is XXXX 

character wiht unicdoe values greater than U+FFFF can also be repsented with this noation 
but in this case we will need ot use o called surrogate pair 

*/
{
    console.log("\u00A9");
    console.log("\u00AF");
    console.log("\u2191");


    
}


/*
\u{X...XXXXXXX}
must be hexadefcfimal value of 1 to 6 bytes between 0 and 10FFFF the higest code point 
defined by unicode 
his notationa allows us to easily repsent all exisint unicode chars 

*/

{
    console.log("\u{20331}");
    console.log("\u{1F60D}");

}

// im done 
