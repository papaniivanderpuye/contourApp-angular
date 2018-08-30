import { InMemoryDbService } from 'angular-in-memory-web-api';
import 'filereader';

var coverLetter= " [Date]\n\
[Receiver Name]\n\
[Receiver Job Title]\n\
[Company Name]\n\
[Receiver Address]\n\
[City, State, Zip Code]\n\
\n\
Dear [Receiver Name]:\n\
\n\
When I read [Company Name]’s posting for a [Position Applying For], I decided to apply\n\
immediately. [I bring to the table [Years of Experience] years of experience as a \n\
[Position Applying For] able to influence corporate growth strategies through fact-based,\n\
data-driven insights and analysis.\n\
\n\
Since earning a [Degree Name], I have worked as a [Position Applying For], for a mid-size\n\
supermarket chain, a financial services organization and a global pharmaceutical company.\n\
\n\
[Summary of Work Achievements].\n\
\n\
As you can see, I am committed to being a positive driver of company goals and confident in\n\
my ability to improve [Company Name]’s operational performance. I am available to interview\n\
anytime and look forward to speaking with you. You can call me at [Number] or email [Email].\n\
Thank you.\n\
\n\
Sincerely,\n\
\n\
[Full Name]\n\
\
";

var networkLetter= "\
Dear [Receiver Name]:\n\
\n\
I am a [College Year] student at [Name Of School] in Atlanta and am writing to you as a fellow alumnus.\n\
I am contacting you because I want to make effective use of my summer. I believe I would enjoy a career\n\
in [Career Industry] and I would appreciate your perspective on the practical aspects of working in this area.\n\
\n\
I am not writing to ask for employment at your office, but rather to see if you have 20 minutes to discuss\n\
[Career Industry]  practice in the market. I would also appreciate any suggestions you may have to offer as\n\
I consider my options for the summer. I will call you later this week to see if we can arrange a convenient\n\
time to discuss. I would be happy to come by your office. In the meantime, please feel free to contact me at\n\
[Phone Number] (cell) or at [Email]. Thank you in advance for your time and consideration.\n\
\n\
Sincerely,\n\
[Full Name]\n\
\
";

var resignLetter="\
[Date]\n\
[Company Name]\n\
[Title]\n\
[Organization]\n\
[Address]\n\
[City, State Zip Code]\n\
\n\
Dear [Mr./Ms.] [Last Name]:\n\
\n\
I am writing to announce my resignation from [Company Name], effective two weeks from this date.\n\
This was not an easy decision to make. The past ten years have been very rewarding. I've enjoyed\n\
working for you and managing a very successful team dedicated to a quality product delivered on time.\n\
Thank you for the opportunities for growth that you have provided me. I wish you and the company all\n\
the best. If I can be of any help during the transition, please don't hesitate to ask.\n\
\n\
Sincerely,\n\
\n\
[Your Name]\n\
\
";

var invitationLetter="Come one, come all to the annual [Name Of Party] Party! As you old-timers know,\n\
 we [Name Of Street] residents hold our block party in [LOcation] every [Month Party Happens]. This\n\
 year the party will be on [Date of Party] beginning at [Time Of Party]. We have several new residents in \n\
  the neighborhood who we want to welcome, so it should be fun.\n\
\n\
[Host name] will be the master of ceremonies for the \"neighborhood roast.\" Our guess is he is attempting to\n\
 remove himself from the volley of appropriate insults he deserves for his Christmas decorations this year.\n\
\n\
Please plan to come and call [Host Name] at [Host Phone Number] to arrange food assignments. See you there!\n\
\
"




export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const heroes = [
      { 
        id: 1, 
        name: "Cover Letter",
        template: coverLetter,
        final:""
       },
      { 
        id: 2, 
        name: "Network Letter",
        template: networkLetter,
        final:""
       },
      { 
        id: 3, 
        name: "Resign Letter",
        template: resignLetter,
        final:""
       },
      { 
        id: 4, 
        name: "Invition Letter",
        template: invitationLetter,
        final:""
       }
    ];
    return {heroes};
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/