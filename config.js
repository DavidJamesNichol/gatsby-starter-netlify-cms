import React from "react"

export default {
  links: {
    home: {
      path: '/',
      text: 'Home'
    },
    memberships: {
      path: '/memberships',
      text: 'Memberships'
    },
    training: {
      path: '/training',
      text: 'Training'
    },
    contact: {
      path: '/contact',
      text: 'Contact'
    }
  },
  content: {
    contactPage: {
      title: 'Contact',
      image: '/img/IMG_6723.jpg',
    },
    membershipsPage: {
      title: 'Memberships',
      image: '/img/IMG_6796.jpg',
      heading: 'Your Avolution Starts Here',
      description: 'Investing in Avolve Fitness, is investing in your own betterment.',
      description1: 'When you become more, you become more to your friends, your family, your career - everything that matters!',
      description2: 'Regardless of where we start, we can all become more.',
      button: 'Become More',
      pricing: {
        plans: [
          {
          items: [
              'Access to all gym equipment',
              'Personal Training Free Trial ',
          ],
            plan: '7 Day Trial',
            price: '0.00'
          },
          {
          items: [
              'Access to all gym equipment',
              'Personal Training Free Trial ',
              '24/7 Access',
            ],
            plan: 'Standard',
            price: '9.99'
          },
          {
            items: [
              'Access to all gym equipment',
              'Personal Training Free Trial ',
              '24/7 Access',
              'Hydromassage Privleges',
              'Bring up to 4 additional guests',
            ],
            plan: 'Signature',
            price: '24.99'
          }
        ],
      },
      benefits: {
        title: 'Membership Benefits',
        items: [
          'Hassle-Free Cancelation',
          'Month-to-Month Contracts',
          'No Sign-Up Fee',
        ]
      }     
    },
    trainingPage: {
      title: 'Training',
      image: '/img/IMG_6690.jpg',
      heading: 'Accountability in 3 Simple Steps!',
      description: 'At Avolve Fitness, we have a patented system to ensure that our clientele are able to overcome the hurdles of becoming more.',
      description1: 'We understand how much important information our clientele process on a daily basis and how exhausting that can be. That\'s why we train our trainers do all the thinking for you.',
      description2: 'Just follow the process, and you will get there - you will Avolve!',
      button: 'Become More',
      pricing: {
        plans: [
          {
          items: [
            'Personal Fitness Assessment',
            '3 Sessions (30 Min)',
          ],
          plan: 'Free Trial',
          price: '0.00'
          },
          {
          items: [
            'Personal Fitness Assessment',
            '12 Sessions (30 Min)',
          ],
          plan: '3 Months',
          price: '299.99'
        },
        {
          items: [
            'Personal Fitness Assessment',
            '27 Sessions (30 Min)',
            'That\'s 3 free sessions!',
          ],
          plan: '6 Months',
          price: '599.99'
        },
        {
          items: [
            'Personal Fitness Assessment',
            '57 Sessions (30 Min)',
            'That\'s 9 free sessions!',
          ],
          plan: 'All Year',
          price: '1199.99'
          }
        ],
      },
      benefits: {
        title: 'Membership Benefits',
        items: [
          'Hassle-Free Cancelation',
          'Month-to-Month Contracts',
          'No Sign-Up Fee',
        ]
      }    
    },
    indexPage: {
      title: 'Begin Your Avolution',
      image: '/img/img_6611.jpg',
      subheading: 'Start My 7 Day Trial',
      mainpitch: {
        title: 'The Cleanest Health Club in Orland Park',
        description: 'Avolve Fitness is dedicated to your fitness, that\'s why we\'re open in this time of crisis. Our fitness center provides you a safe and clean environment where you can get back to your fitness journey - you deserve it.',

      },
      intro: {
        blurbs: [
          {
            image: '/img/IMG_6690.jpg',
            text: 'Training',
            link: '/training',
            paragraph: <div>
                <article>
                  <h3 className="underline">Recieve Training from our Elite Staff</h3>
                  <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam fugit consequatur eligendi odit enim, quam, nihil explicabo fuga, ex nostrum aut blanditiis quisquam eius harum aspernatur excepturi libero ipsum.
                  Itaque, facere excepturi qui necessitatibus placeat, assumenda omnis eum fugit pariatur sapiente quidem doloremque minus, voluptate voluptas laudantium soluta beatae numquam dolore vel tempora quia fuga? Eveniet et earum reiciendis.
                  Tenetur nesciunt fugiat repellendus illo, sapiente dolore? Similique quia culpa minima ea doloremque, unde inventore quos beatae veniam, dolores, quis distinctio in exercitationem maiores iure quaerat adipisci temporibus repudiandae quod.</p>
                </article>
              </div>
          },
          {
            image: '/img/IMG_6512.jpg',
            text: 'Memberships',
            link: '/memberships',
            paragraph: <div>
              <h3 className="underline">Become a Member to Begin your Avolution</h3>
              <article>
                <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste totam fugit consequatur eligendi odit enim, quam, nihil explicabo fuga, ex nostrum aut blanditiis quisquam eius harum aspernatur excepturi libero ipsum.
                Itaque, facere excepturi qui necessitatibus placeat, assumenda omnis eum fugit pariatur sapiente quidem doloremque minus, voluptate voluptas laudantium soluta beatae numquam dolore vel tempora quia fuga? Eveniet et earum reiciendis.
                Tenetur nesciunt fugiat repellendus illo, sapiente dolore? Similique quia culpa minima ea doloremque, unde inventore quos beatae veniam, dolores, quis distinctio in exercitationem maiores iure quaerat adipisci temporibus repudiandae quod.</p>
              </article>
            </div>
          }
        ],
        heading: 'What we offer',
      },
      main: {
        image1: {
          alt: 'A close-up of a paper filter filled with ground coffee',
          image: '/img/IMG_6796.jpg'
        },
        testimonials: [
          {
            text: 'Honestly, this gym is perfect. First off, it has got a great team. Ken, Dareen and the rest of the gang are all awesome. All the equipment is new and clean. It has got everything you need and plenty of room. This gym is perfect for anybody who is dedicated to fitness and wants a nice place to work out in.',
            name: 'Matt Ayesh',
          },
          {
            text: 'I joined Avolve Fitness a few weeks ago and have been impressed ever since. Everything is brand new, all the equipment is cleaned every and all day and the staff is very inviting and friendly. De and Josh are always there to greet you with a smile all the time! The owner Ken is a very nice guy, always there with a smile as well! The cleanest gym I’ve been in! Great job!',
            name: 'Gina Maye',
          },
          {
            text: 'I joined Avolve about two months ago because it was closer to home than my old gym. I do not regret my decision to change gyms. The equipment is new, the staff is friendly and overall the atmosphere makes me feel comfortable. The personal trainers offer different dynamics when working out because of their own years of experience. Whether I’m working out with Alan or Ken, I always feel like I’m being pushed to my limits and always feel accomplished after a personal training session. They are always very helpful even if not specifically training me. Josh has given me a pointer or two about my form every now and then. I would definitely recommend this gym.',
            name: 'Luis Carrillo',
          },
          {
            text: 'I came on Monday and was welcomed by Josh, the general manager/personal trainer. He gave me a tour of the gym and allowed me to workout for the day to see how I liked it. The gym is spotless clean and all of the equipment is brand new, I love it!!! I met the owner Ken today and like Josh, he was down-to-earth and willing to answer all questions I had about signing up. I’m glad to make this my new home (:',
            name: 'Angle A',
          },
          {
            text: 'Have had memberships at LA, Planet, X-Sport, and even lifetime and this is by far the best gym I’ve been to! You will never find another gym that caters to all your workout needs and that will work with you. Awesome vibe as well!!',
            name: 'Gianna Skye',
          },
          {
            text: 'Been coming to this gym for almost a year now and I love it!! The place has an awesome chill vibe with awesome equipment that’s kept very clean!! Ken the owner always goes above and beyond for all his members and is always so helpful and kind!! 12/10 would recommend this gym to everyone and will continue to go to this gym!',
            name: 'Christina Fontaine',
          },
          {
            text: 'I was gym hunting and I needed a gym that was not too big or expensive. Avolve had just opened up and a friend recommended it to me. This gym is the perfect place for me to workout and it is so convenient, so no more excuses. I appreciate on how well they communicate with their customers in the email to keep us up to date on any changes that will take place. To insure our safety during this pandemic, Ken\'s staff has been cleaning the equipment multiple times throughout the day. I honestly love going to this gym and all the employees are so welcoming! I hope they keep expanding!',
            name: 'Hafsa Kagzi',
          },
          {
            text: 'Amazing staff and super clean place. They maintain safety precautions which is top priority especially during these times. They also do a great job with maintaining occupancy max numbers to further follow safety measures. Equipment is top notch and new. I highly recommend.',
            name: 'Randa Abdallah',
          },
          {
            text: 'Avolve fitness exceeded my expectations! All the equipment is modern and kept squeaky clean. But beyond that, the staff is so kind and welcoming which makes the environment the best it can be. This is a great gym to be a part of.',
            name: 'Jessica Alcordo',
          },
          {
            text: 'Great gym. Always clean and staff is friendly. The owner Ken is a great guy, always willing to help you with whatever you need.',
            name: 'Justin K',
          },
          {
            text: 'The best word to describe this gym is "unique".  There is a great vibe to the place that starts at the top.  I met the owner and you can feel the passion and the wanting to be different or as I define as "unique".  The gym is clean, set up well, and more important it has energy that should translate to the workout.  If your not a member here, I would definitely at the very least consider.',
            name: 'Ed Tully',
          },
        ],
        bottomCarousel: [
          {
            title: 'Helpful Trainers',
            text: 'Our friendly and understanding trainers listen to your goals so they can help you reach them.',
            buttonText: 'Become More',
            image: '/img/IMG_6665.jpg'
          },
          {
            title: 'Signature Membership',
            text: 'Signature Perks let you bring friends for free, recover faster with hydromassage, and more!',
            buttonText: 'Avolve Faster',
            image: '/img/IMG_6756.jpg'
          },
          {
            title: 'Customized Meal Plans',
            text: 'Get your blueprint for success with one of our FREE PERSONALIZED MEAL PLANS',
            buttonText: 'Eat Better',
            image: '/img/IMG_6458.jpg'
          }
        ]
        
        
      },


    }
  }
}