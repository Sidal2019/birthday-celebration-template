import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import Confetti from "./Confetti";
import "./MessageCard.css";

function MessageCard({ isActive }) {
  const [curtainsOpened, setCurtainsOpened] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const prevIsActive = useRef(isActive);

  const curtainLeftRef = useRef(null);
  const curtainRightRef = useRef(null);
  const curtainHintRef = useRef(null);
  const messageContentRef = useRef(null);

  const message = `Letter 5 for his bday 🫶🏻❤️ (THE BEGINING 🥹🧿)

Heyy bubuuu🥹Sometimes I sit and think about how everything started between us… and honestly, it still feels a little unreal🥹. Our beginning wasn’t dramatic, not movie-type or overly romantic. It was simple… very simple . it wass just an I contact and taych ekka i contact  madhee mala maza friend, lover and maza sarva kahi mala bhetun gele 🥹🧿
You came into my life so softly like someone who just walks in without making any noise, but still changes the whole vibe .Mala kadhich navta vatala ki assa achaanak mala tu bhetshill coz adhi pasunnach mi introvert hoti tayt kontay porashi kadhich nay bolli tu mazay life madla 2nd porga ahes jaychayshi mi bolli assa noko samju ki koni dusra hota tuzay adhi 🤣 the 1st one was my childhood frnd.. idk taydivshi tula bagun mazay madhe kay zala ki mi direct unnati la bolli ki hach porga pahije mala yacha insta id shoudun kad 🤣 and haa 1st of all navv pan coz mala tar tuza nav pan navta mahiti 🥲 and then this was the biggest moment that changed everything.and on 16dec 2020 i came into your life, your biggest trouble 😂🥲and then we started talking, small conversations… your calm tone… that easy feeling around you. And slowly-slowly, before I even realised, you became a little important to me.
Some people enter your life loudly, but some enter so quietly… and still create the biggest effect. You were the quiet one. And maybe that’s why you stayed in my mind.
I don’t know if you remember our first proper conversation but I do. Not because of what we said… but because ofhow it made me feel.It felt comfortable.It felt easy.It felt like I didn’t have to pretend anything in front of you.
And maybe that’s where it all began… 🧿Looking back now, I think that beginning was the start of everything I feel today this softness, this attachment, this strange little care I have for you.
Some beginnings don’t look special at first… but they become special when you look back.
Ours was exactly like that.And I’m honestly glad you came into my life the way you did  quietly, calmly, but meaningfully.

Letter 6 for his bday 🫶🏻❤️ ( the memories that stayed 🥹)

Tanishhh yrr tuzay sobat chay memories tar kayyach bollu miii , everyyy single sec I spend with youuu aree thee bestttest memories of my life 🥹 but still something specific iss.... The class valee memories 😩🤌🏻 ik tu te 10th chay adhi chee gostii nay manat teee but still 🥹 sarvat jasta memories tar aapalay bhandanachaych ahet🤣😂 adhi ek assa divas navta jat ki apan dhandaycho nayy but still I miss those days I miss to vala tanishh🥺😭 tanish tuzay bhandanachi mala itki savay zaliye na ki atta tu changla bollas ki maza assa thoda veglach vattaa 😂 ki broo haa kharach tanish sach ahe naa ...😂 Butt stilll tu jaassaa ahees khupp god ahee assaach nehamii rahaaa haa 🥹 I still remember ki apan kassa class madhe baslayvar ek mekanna assa hand che signs karun sangaycho ki kitivasta call karaychaa teee 😂 
Kitiii memories ahett yrrr 😭 I remember every thing, uk mala tar he pan lakshay ahe ki tu class madhe kontay divshi konta t shirt ghalun yeychaa coz yaa mage pan ek reason ahe tu naa te domes che pencil bhete bg ti colourful valii tay colours che tshirts hote tuzya kadee mala asaa mahiti asaycha ki tu konta ghalun yenar ahes mg mi taych colour chi pencils anaychii ajun pan to sequence mala learn ahee😂😂 kiti chutiyaapaa kelayy naa miii bcc 😂😂 jaudee lahan hoti naa mii🥲😂
 2nd is tuzaa bday bhaiii😩 itke kasta kele hote mi tay divshi I still remember 2021 madhe tuza bday Sunday la hotaaa and tu 1st assaa person ahe jaychay sathi mi savtaahun savtache paise kharchaa kelaa nahitar mi konalach navti det attaa mala thodaa laj vatee shiii bhaii mi tulaa bday la deun deun pan kay dilaa ek chocolate 😂😂 koi naa no comments lahan hoti mii🥲😂 chalta haiii chall attaa next letter haa ,letter attaa nahitar mi lihitach jaill ani tulaa bor houn jaill coz khupppp sareee memories aheett😩🥹
 
 Letter 7 for his bday 🫶🏻❤️ ( the little things I adore 😌)

People always talk about big things ,big moments, big gestures, big confessions.
But honestly… the things I adore about you are the smallest, simplest ones.
The ones maybe even you yourself don’t notice.

Like the way you say something seriously but your eyes give away the softness behind it.
Or the way you get angry quickly, but ik this anger is for some time only , coz tu kitna bhi gussa karlee tanish hum tumhe manna hi lenge 😎☺️
teree yese chote chotee mood swings to me sambhal hi sakti huu ...😜😌

I adore how you are just yourself, raw,  unfiltered…🥹and somehow that feels more real than anything and and assach rahaa nehamiii I will accept you with all your pros and cons 
I adore how even when you’re tired or stressed,
you still listen… to me Even those two-three words you say casually,they stay with me the whole day.

I adore your laugh the one you try to hide,the one that comes out suddenly when something genuinely hits you. Hayyeee tanishhh🥹 aj pan tuza hasana mazay dolay samor yetaa 🥹😭😭🫶🏻 brooo 😩😩 itkaaaa cuteee konn asstaaaa ka  yrrrrrrrr 😩😭 tula hastana bagun mi sarva kahi visrun jateee I just lovee youuuuu😩😭
I adore how your presence itself is calm.Even when you’re silent, it doesn’t feel empty, it feels safe, comfortable…

And I adore the little things you don’t even realize you do 🥹your honesty, your small kindnesses,your stubbornness, your sarcasm,
your unexpected sweetness. And tee tuzaa convo madhe bolnaa ( assach kassach 😌) tanishh direct mazay attla soul baher Yeun jatooo coz tu te boltaa na kiti cutee vatos naa u can't even imagine 🤌🏻😩😭
All these tiny things…
they’ve quietly become my favourite parts of you.🥹
Maybe you think you are complicated,maybe you think you’re too stressed or too broken…but to me,
even your simplest traits feel like something worth holding into.It’s the little things, bubuu🥹🫶🏻They’re the reason you feel so special without even trying.

Letter 8 for his bday 🥹🤌🏻 ( My favourite version of you 🫶🏻❤️ )


Tanish you have many sides… the calm one, the irritated one, the quiet one, the stressed one.
And honestly, I like all of them in different ways.
But if I have to say it clearly , there is one version of you that I love the most.
My favourite version of you is the one who forgets everything for a moment and just smiles.
That small, real smile you don’t even realise you’re giving…
it feels warm, it feels honest, and it feels like the real you🥹
My favourite version of you is the one who talks freely, not overthinking, not worrying, just being yourself without any filter. You look happier in those moments, and I love seeing that🥹❤️
My favourite version of you is the one who opens up even a little, the one who says what he feels instead of hiding it. It shows trust ( ik tula nahi ahe mazay var trust butt still... 🥺 Koi na 🙂  hum apna trust khud kamma lenge 😌 ) it means more than you think.
My favourite version of you is also the quiet one 
the one who doesn’t say much but still cares in small ways.That silent care feels so genuine.
And honestly…
my favourite version of you is simply the one where you’re not pretending to be strong all the time.The raw, tired, real you I like that version too.Because it shows the human side of you, not the “I have to handle everything alone” side.So yes…
you have many versions,
but all of them make you who you are.
And maybe that’s why it’s so easy to care about you.Forever a person who likes every shade of you 🥹🫶🏻❤️ love you.......🥹

Letter 9 for his bday 🥹❤️🫶🏻 ( thanku for existing 🥹😌 )

I don’t say this often,
but today I just want to tell you something that , thank you for existing😌
Thank you for being the kind of person who doesn’t even realise how much impact he has.
Thank you for the moments big or small, where you made my day feel lighter without trying.

Thank you for the way you talk, the way you smile unexpectedly🤌🏻,the way you show care in small, quiet ways.It might look normal to you,
but it stays with me.Thank you for being honest,
even when your honesty is a little sharp.
At least it’s real,
and I respect that more than anything.
Thank you for not pretending to be perfect.
Your flaws, your moods, your silence,
everything makes you human and that’s what makes you special.

Thank you for giving me memories that I didn’t even realise would mean so much. Littleconversations,small laughs,random moments…🫶🏻they all turned into something I cherish.And thank you for staying in my life,
even when things got messy,even when life was heavy for both of us.You don’t know it,
but your presence has helped me more times than I can count.
So yes…
I don’t have fancy words,
but I do have this one line straight from my heart that , Thank you for being in this world at the same time as me. And thankss to your mom dad that unhone tujee itna achaa banayaa haii 🥹 ik tu attaa khup life struggles kartoyes but still one day your parents will be sooooo much proud of you and definitely mi tar nehami tuzaysathi proud feel kartee coz inspite of this many struggles u still stand strong basss assach strong rahaaa and kadhich savtala ekta noko samjus haa tanish 🥺 I am always there for youu..

Letter 10 for his bdayy🥺❤️


Haa letter naa tanishhh tulaa he sangay sathii ahe ki ,plzz yrrr adhii jassaa hotaas tassaa houn jaa na yrr plz tanishhh😭🥺 coz naa haa jo tanish ahee naa mala assa thodaa anolkhi vataa naa ki haa to nahi ahee jo adhii hotaaa coz naa adhi tula athavat asell tu khupp chidaycha mazay varr ragvaychaa butt tuu mala real vataychaa no doubt atta pan ahes butt still atta chay tanish madhee assa vatta ki ... Tu jarii atta sweetly bollas na ki assa vaata ki haa kharach tanish sach ahee naa means... Samajtay ka tulaa ik tuzya life madhe khup kahi zalay and all but still.. ik tu parat nahi mage jauu shaktat butt still 🥺🥺 ..... Bakki kay nayyy assaach nehaamii khushh rahaa and may thiss 21th birthday tuzya life madhe khup changes gheun yeill sarvaa thikee houn jaill ... 🥹🫶🏻

Letter 11 for his bday 🥹🫶🏻❤️

Some people leave marks on the world not by being loud, but by simply existing the way they do.You are one of those people.Your presence has a quiet depth, something that doesn’t demand attention, yet is impossible to ignore once felt.
You carry thoughts you rarely speak about.You feel more than you show.And even on days when you’re tired of being strong, you still try to be gentle with the world.That says a lot about the kind of person you are.

On your birthday, I don’t want to celebrate just the day you were born.I want to celebrate the person you’ve become through everything life has handed you the battles no one saw, the patience you learned, the silences you survived.

You may not always see your own worth, but please believe this, your existence has meaning beyond what you measure it by. You matter even when you’re unsure, even when you feel lost, even when you feel replaceable.You are not.

I hope life gives you moments where you don’t have to carry anything heavy.Moments where you can breathe without explaining yourself.
Moments where you feel chosen,not because of what you do, but because of who you are.

And if ever you forget your own light,
I hope someone, somewhere, reminds you how rare it is.
Thank you for being you🫶🏻🥹❤️

12 th letter  for his bdayy 🥹 (Words mostly used by him😩🫶🏻🥹)

-Kvn🤌🏻
-Assach kassach ( bro literally  jeva tu he boltoss naa fakt tu maza ek vela tond baghayla pahijee bcc ittkaa blushh hayyyyyyyyy🤌🏻🥹😩
And attaa kahi tari navin chalu kelayess 😂 good gurl 😂 but still itss too cuteeee 😩🥹😌
- and tu tanishhh hayyyyy yrrr tu jeva jevaa drunk call kartoss naa hayyeee kay goodd vatoss assaa vatt ki assaa call roj yavaa but still noko... Coz tu parat roj roj drink karshill and te mala nay chalnar samajlaa naaa😤 noko kharab karuss tuzi health and alll plzz tulaa nehami Happy healthy baghaychay mala 🥺
 - ajun ek ahe je mala tu bolle la avadhta ki thamb bell lavto mi ..... Tu vichar karat ashil ki mi hilaa he kadhi bolllo but bollaa ahes tu mala he don velaa and tehii mazay sathii khup god ahe 🤭 assaa tar tu bolleela sarvach vala khup cutee god vattaa pan chal attaa jastaa nahi bollnar nahitar tu bhav khashill 🤣
 
 Letter 13 for his bday 🥹🫶🏻❤️

Writing to you is never easy,
because what I feel never fully fits into words Still I’m writing because you deserve more than my silence🥹
You’re not someone I can talk about casually The moment your name comes up, something in me softens🥹😩My tone changes , My heart listens a little more carefully.I don’t love you for your perfection,I love you for your reality The way you get serious, the way you sometimes pull back,
and yet somehow understand me without asingle word🥹 that’s what makes you you.
To me, you’re not just a person.You’re comfort in unfamiliar moments. You’re a thought that appears without reason.You’re a feeling I never have to explain.
I don’t need every moment with you to be romantic, I just need your presence. A little calm in your voice.A little reassurance in knowing you’re there.
It’s your birthday today, and all I want to say is this the way you are is enough.More than enough🥹🫶🏻.
You may never realize it, but to me you mean more than you’ll ever know,To me, you are deeply, quietly special.

Happy Birthday,my favorite man🥹
Your place in my life is different and it always will be 🤍🧿

Letter 14 for his bday 🥳🥹❤️

I wasn’t there for your childhood.I didn’t see you grow up,didn’t hear your first stories,didn’t watch you become who you are today.
But I’ve seen your childhood picture🥹😩🤌🏻And honestly , bhaiii itkkaa cuttee konii assu shaktaa kaa😩🥹🧿 That smile, that innocence…😩no wonder my heart melts a little every time I look at you.Nazaar na lage🧿,seriously.
Sometimes I think about the little version of you
and the man you’ve become,and it makes me smile.There’s something very pure about you something that still shows, even now.
I’m genuinely grateful to your mom, For raising a man like you. For giving the world someone this warm, this real.She should be proud, because I am.
I may not have been part of your beginning,but I’m thankful I get to know you now.To see you as you are strong, imperfect, kind in your own way.
This letter isn’t about love stories or promises.
It’s about admiration.And a little affection that lives quietly in my heart.
 
Happy Birthday, bubuu🥹🧿The world is a little betterbecause you’re in it 🤍

Letter 15 for his bday 🥹🫶🏻💗(A little bit mine🥹🧿)
I don’t know when it happened, but at some point, you stopped being just someone I liked
and became someone I noticed in everything.
I notice you in random songs,in things I want to tell someone first,in moments where I automatically think,“he would understand this.”❤️You have this way of making space without even trying.You don’t demand attention,
yet you somehow get all of mine.And yes, let me say this clearly ,you’re handsome😩🤌🏻In that effortless, no trying too hard kind of way.
The kind that makes me roll my eyes and smile at the same time.I like how you exist, Calm but strong.Soft where it matters , And very you.
I won’t say you’re mine.But a little part of my heart has decided, you belong.  there quietly, comfortably. So on your birthday,
this letter is just a reminder:someone out here smiles a little more because you exist. 🥺❤️

Letter 16 for his bday 🎉🥹🫶🏻💗 (if someday .. )
If someday you ever wonder , whether you mattered more than you knew,I hope this letter answers that. 
You matter in ways that don’t make noise. In ways that don’t demand attention.In ways that simply stay.I imagine small, simple moments with you. Not grand plans or perfect futures , just quiet happiness, Shared smiles,Conversations that don’t need to end. Comfort that feels familiar.If someday our paths walk side by side,
I’d choose you in the ordinary moments.On tired days.On boring evenings.On days when life feels heavyand all you need is someone who understands.
And if someday our paths don’t align,I’d still wish you the same happiness.The kind that feels right.
The kind that feels like home.
This letter isn’t asking for anything.It’s just honesty.A soft truth written without expectations I like you not for what you could be,but for who you already are.
 
So on your birthday,
I hope you carry this thought with you that you are wanted, appreciated,and quietly cherished.

Letter 17 for his bday ❤️🧿🎉 (For When Your Mind Feels Heavy )


If you’re reading this,come here just for a moment. This letter is your quiet place . 

You don’t need to explain anything to me.You don’t need to be strong right now.You’re allowed to rest in these words , the way you would rest in my arms 🥺🫂if I were there. I know you overthink.I know your mind runs faster at night.
But listen to me , you don’t have to carry everything alone.You are safe here 🥺❤️ With me, you don’t have to prove anything.You don’t have to pretend you’re okay.I see you even in your silence.If your thoughts are telling you
that you’re not enough,that you’re late,that you’re failing ,don’t believe them.I know the man you are.And he is more than enough🫶🏻🥹

Let this letter remind you: there is someone who chooses you ,even on your messy days. Someone who is proud of youeven when you doubt yourself. So slow down, Breathe 
And let yourself feel held for a moment.

This is written by the woman, who wants you calm, okay, and at peace.You can always come back to these words whenever you feel low🥺
And remember I am always there for you even if we are not talking now jeva kadhi tula assa vatel ki mala samjun ghenar koni nahi ahee kiva kadhi ekta vatla tar call kar , even in the middle of the night I am always there for you.🫂🥹❤️

Letter 18 for is bday 🥹🫶🏻💗(Read This When You Have No One )


If you’re reading this at a time , when it feels like there’s no one around you, then this letter is me sitting next to you quietly.

I know you don’t always say when you’re not okay.I know you pretend you’ve got things under control.But you don’t have to do that here.Even if no one is calling you,even if the room feels empty,you still matter.You always have.

I want you to remember something very clearly 
you are not hard to love.You are not too much.
And you are definitely not alone in the ways that count.If I were there,I wouldn’t ask you to talk.
I’d just sit with you,let you feel whatever you’re feeling, and remind you that you’re safe.

So when things feel heavy,
come back to these words.
They’re written for you.
By someone who cares more than you realize.

Stay here.
Take a breath.
I’m with you even like this🫶🏻🥺

Letter 19 for his bday 💗🫶🏻🥳 ( I want to see you rise 🥹🫶🏻 )

Happy Birthday to the man I admire more than words can say.
I am not  just celebrating your birthday today,I am celebrating everything you are becoming.
The dreams you chase, the challenges you face,
the quiet strength you carry even when no one notices.I want you to know something. When I picture the future,I don’t just see us smiling, laughing, or sharing moments.I see you succeeding🥹💗I see you achieving every goal you set.I see the world recognizing the talent, the effort, the man you are.
And honestly…I can’t wait to witness it.
To see you rise, to see you proud of yourself,
to see the results of every sleepless night,
every doubt you’ve pushed through.Because your success isn’t just yours it inspires the people around you.It inspires me.It makes me want to cheer louder,to be a little better myself,
just by watching you grow.

So today, I wish you more than happiness.
I wish you victories that make your heart swell,
opportunities that challenge you and reward you,
and moments that remind you that you’re capable of everything.Happy Birthday, my favorite man🥹🧿🫶🏻
I don’t just wish you a good year, I wish you a life where you shine brighter than ever, and I get to see every bit of it☺️💗

Letter 20 for his bday 🥹🫶🏻💗(The Little Things About You I Can’t Forget )



There are so many little things about you that I can’t forget. Things that seem small, even ordinary, but somehow, they stay with me.
The way you smile when you’re lost in thought🥹🤌🏻, the way your eyes light up at something you care about, the quiet confidence you carry even when no one notices.
I notice the tiny gestures , the way you run your fingers through your hair ,the way you frown slightly when you’re thinking too hard, the little laughs that escape even when you try to hold them in.All of these moments, these small details, make you unmistakably, perfectly you.

I love how effortlessly you leave an impression.
Not with grand gestures or words,but with the way you exist in a room,the way you care quietly,
the way you touch lives without even realizing it.
Even your silences speak,and I can hear everything I need to from them.Sometimes I catch myself smilingjust remembering a random glance from you,or a small act you did that didn’t seem like much.Those little things aren’t little to me. They’re memories I treasure🥹,moments I hold in my heart like tiny starsthat shine quietly but endlessly.

And it’s not just the cute or funny things.It’s the strength you carry, the way you face challenges without showing how heavy they feel,
the way you try even when things seem impossible.Those are the little things, too the parts of you that inspire me, that make me admire you more every day.

So today, on your birthday,
I don’t just celebrate you for being amazing in big ways.
I celebrate every tiny detail, every quiet habit,
every little thing that makes you you
and that makes it impossible for me not to notice.
You are unforgettable, bubuu🥹🫶🏻
And I feel lucky to hold all these little pieces of you in my heart.

Letter 21 for his bday 🥹🧿🥳
Happy 21st Birthday, bubuu 🥹 💫

As the clock strikes 12:00 on 17th January 2026,
I want you to feel every bit of happiness the world can give.
I want this moment to be yours completely , the start of a new chapter, a fresh year, a lifetime of possibilities.
I hope this year brings you laughter that’s louder than any worry,success that makes you proud,
moments that make your heart swell,
and people who value you as much as you deserve.

You’ve always had this quiet strength,
this incredible way of moving through life with patience and courage,and it amazes me every single day.
I hope you see yourself the way I see you someone truly special, someone capable of anything, someone whose happiness matters more than anything.So here’s my wish for you as the clock hits 12:00
May every dream you chase find its path.
May every step forward make you stronger.
May your heart always feel light, loved, and free.
And may you always know that someone out here is silently cheering for you,proud of you, admiring you,and wishing you the best in every way possible.

Happy 21st,my favorite man 🫶🏻🥹🧿
This is your time shine, laugh, and live it fully.You deserve all the happiness in the world… and so much more. 

   — With all my heart 🥹💌
   
   One extra letter (tuzay extra life sathi🥹🧿)

This letter is not for a date, not just for a birthday, but for your extra life for every year that is yet to come.
I wish you a life where you are always safe.Safe from harm,safe from pain,safe from everything that tries to dim your light.

May your age always keep increasing,not just in numbers,but in wisdom, strength, and happiness.May life keep choosing you, again and again.And if it were possible,I would give you my share of life too ,so that you live longer, smile longer,and stay longer in this world.

May every step you take be protected.May every dream you hold find its way.May time always be kind to you. This is not just a wish.It’s a silent prayer that you live long, live fully, and live beautifully.
                           ------°----°------

“In every life, in every heartbeat, I hope my soul keeps finding yours.” 💫`;

  // Handle page transitions
  useEffect(() => {
    // Only trigger on transition to active
    if (isActive && !prevIsActive.current) {
      setTimeout(() => setShowConfetti(true), 10);
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      prevIsActive.current = isActive;
      return () => clearTimeout(timer);
    }

    // Reset curtains when leaving page with smooth animation
    if (!isActive && prevIsActive.current) {
      setTimeout(() => {
        setCurtainsOpened(false);

        // Smooth reset animation
        if (curtainLeftRef.current && curtainRightRef.current) {
          const resetTimeline = gsap.timeline();

          resetTimeline.to([curtainLeftRef.current, curtainRightRef.current], {
            opacity: 1,
            duration: 0.3,
          });

          resetTimeline.to(
            [curtainLeftRef.current, curtainRightRef.current],
            {
              x: "0%",
              rotationY: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0.3
          );
        }

        if (messageContentRef.current) {
          gsap.to(messageContentRef.current, {
            opacity: 0,
            scale: 0.9,
            duration: 0.3,
          });
        }
      }, 300);
    }

    prevIsActive.current = isActive;
    return undefined;
  }, [isActive]);

  const handleOpenCurtains = () => {
    if (!curtainsOpened) {
      setCurtainsOpened(true);

      // Detect screen size for responsive animations
      const isMobile = window.innerWidth <= 768;
      const isSmallMobile = window.innerWidth <= 480;

      // Adjust animation parameters based on screen size
      const duration = isSmallMobile ? 1.2 : isMobile ? 1.4 : 1.5;
      const rotationAngle = isSmallMobile ? 10 : isMobile ? 12 : 15;

      // Animate curtain hint fade out
      gsap.to(curtainHintRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.4,
        ease: "power2.in",
      });

      // Animate curtains opening with 3D effect
      const timeline = gsap.timeline();

      timeline.to(
        curtainLeftRef.current,
        {
          x: "-100%",
          rotationY: -rotationAngle,
          duration: duration,
          ease: "power3.inOut",
        },
        0
      );

      timeline.to(
        curtainRightRef.current,
        {
          x: "100%",
          rotationY: rotationAngle,
          duration: duration,
          ease: "power3.inOut",
        },
        0
      );

      // Fade out curtains
      timeline.to(
        [curtainLeftRef.current, curtainRightRef.current],
        {
          opacity: 0,
          duration: 0.5,
          delay: isMobile ? 0.8 : 1,
        },
        0
      );

      // Reveal message content with smooth animation
      timeline.to(
        messageContentRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: isMobile ? 0.8 : 1,
          ease: "back.out(1.2)",
          delay: isMobile ? 0.6 : 0.8,
        },
        0
      );
    }
  };

  // Handle touch events for mobile
  const handleTouchStart = () => {
    if (!curtainsOpened) {
      // Add subtle scale effect on touch
      gsap.to(curtainHintRef.current, {
        scale: 0.95,
        duration: 0.1,
      });
    }
  };

  const handleTouchEnd = () => {
    if (!curtainsOpened) {
      gsap.to(curtainHintRef.current, {
        scale: 1,
        duration: 0.1,
      });
    }
  };

  return (
    <section className="message">
      <h2>💌 A Message From My Heart</h2>

      <div className="curtain-container">
        <div className="curtain-rod"></div>

        <div
          className={`curtain-wrapper ${
            curtainsOpened ? "opened opening" : ""
          }`}
          onClick={handleOpenCurtains}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="button"
          tabIndex={curtainsOpened ? -1 : 0}
          aria-label="Click or tap to open the curtains and reveal the birthday message"
          onKeyDown={(e) => {
            if ((e.key === "Enter" || e.key === " ") && !curtainsOpened) {
              e.preventDefault();
              handleOpenCurtains();
            }
          }}
        >
          <div ref={curtainLeftRef} className="curtain curtain-left"></div>
          <div ref={curtainRightRef} className="curtain curtain-right"></div>
          {!curtainsOpened && (
            <div ref={curtainHintRef} className="curtain-hint">
              ✨ {window.innerWidth <= 768 ? "Tap" : "Click"} to Open ✨
            </div>
          )}
        </div>

        <div
          ref={messageContentRef}
          className="message-content"
          role="article"
          aria-label="Birthday message"
        >
          <p className="typed-text">{message}</p>
        </div>
      </div>

      {showConfetti && <Confetti />}
    </section>
  );
}

export default MessageCard;
