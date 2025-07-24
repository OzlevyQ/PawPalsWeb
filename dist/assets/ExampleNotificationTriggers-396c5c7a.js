import{K as i,j as e}from"./index-d63ee538.js";import{r as m}from"./vendor-021dee49.js";import"./utils-917b1704.js";import"./router-3052588b.js";/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],g=i("calendar",p);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],f=i("circle-check-big",h);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],s=i("code",u);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],v=i("map-pin",x);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],y=i("message-circle",N);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],n=i("settings",w);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],b=i("star",j);/**
 * @license lucide-react v0.518.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],k=i("user-plus",q),I=()=>{const[a,r]=m.useState(null),o=[{id:"messages",title:"Chat Messages",icon:e.jsx(y,{className:"text-blue-600"}),description:"Automatic notifications when a new message arrives",code:`// In the messages controller
const sendMessage = async (req, res) => {
  // ... create message
  const newMessage = await Message.create(messageData);
  
  // Create notification for recipients
  for (const recipientId of recipients) {
    await NotificationService.createMessageNotification(
      req.userId, 
      recipientId, 
      chatId, 
      message.text
    );
  }
};`,integration:["Instant notification to user who received the message","Includes message preview","Direct link to chat room","Auto-mark as read when entering chat"]},{id:"friends",title:"Friend Requests",icon:e.jsx(k,{className:"text-green-600"}),description:"Notifications for friend requests, approvals and rejections",code:`// In the friends controller
const sendFriendRequest = async (req, res) => {
  const friendship = await Friendship.create(friendshipData);
  
  // Notification to request recipient
  await NotificationService.createFriendRequestNotification(
    requesterId, 
    recipientId, 
    friendship._id
  );
};

const acceptFriendRequest = async (req, res) => {
  await friendship.accept();
  
  // Notification to request sender
  await NotificationService.createFriendRequestResponseNotification(
    userId, 
    friendship.requester, 
    friendship._id, 
    'accepted'
  );
};`,integration:["Instant notification when someone sends a friend request","Notification when request is approved or declined","Link to friends management page","Integration with friends list"]},{id:"events",title:"Events and Registrations",icon:e.jsx(g,{className:"text-purple-600"}),description:"Notifications for event registrations, approvals and reminders",code:`// In the events controller
const registerForEvent = async (req, res) => {
  const result = event.registerParticipant(req.userId, dogIds);
  
  // Notification to event organizer
  await NotificationService.createEventRegistrationNotification(
    req.userId, 
    event.organizer, 
    event._id, 
    event.title
  );
};

const updateParticipantStatus = async (req, res) => {
  const participant = event.updateParticipantStatus(participantId, status);
  
  // Notification to participant
  await NotificationService.createEventStatusUpdateNotification(
    participant.user,
    event._id,
    event.title,
    status,
    notes
  );
};`,integration:["Notification to organizer when someone registers for event","Notification to participant when registration is approved/declined","Automatic reminders before the event","Notifications about event cancellation"]},{id:"gardens",title:"Garden Updates",icon:e.jsx(v,{className:"text-orange-600"}),description:"Notifications about changes and news in gardens",code:`// In the gardens controller
const updateGarden = async (req, res) => {
  await garden.save();
  
  // Notification to all users who visited the garden
  const visitors = await Visit.find({ garden: gardenId })
    .distinct('user');
  
  for (const userId of visitors) {
    await NotificationService.createGardenUpdateNotification(
      userId,
      garden._id,
      garden.name,
      'info_update',
      'Garden details have been updated - check what's new!'
    );
  }
};`,integration:["Notifications about garden detail changes","Updates about new events in the garden","Notifications to users who visited the garden","Updates from the manager"]},{id:"reviews",title:"Reviews and Ratings",icon:e.jsx(b,{className:"text-yellow-600"}),description:"Notifications about new reviews and responses",code:`// In the reviews controller
const createReview = async (req, res) => {
  const review = await Review.create(reviewData);
  
  // Notification to garden manager
  const garden = await Garden.findById(review.garden)
    .populate('manager');
  
  if (garden.manager) {
    await NotificationService.createReviewNotification(
      garden.manager._id,
      review._id,
      garden.name,
      review.rating
    );
  }
};`,integration:["Notification to garden manager about new review","Notification when someone responds to your review","Updates about garden rating changes","Reminders to write a review"]},{id:"admin",title:"Administrative Requests",icon:e.jsx(n,{className:"text-red-600"}),description:"Notifications to administrators about permission requests",code:`// In the requests controller
const submitRequest = async (req, res) => {
  const request = await Request.create(requestData);
  
  // Notification to all administrators
  const admins = await User.find({ role: 'admin' });
  
  for (const admin of admins) {
    await NotificationService.createPermissionRequestNotification(
      admin._id,
      req.userId,
      request.type
    );
  }
};`,integration:["Notifications to administrators about new permission requests","Updates about request approval/rejection","Urgent notifications to system administrators","Daily summaries"]}],c=t=>{r(a===t?null:t)};return e.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[e.jsxs("div",{className:"mb-8 text-center",children:[e.jsxs("div",{className:"flex items-center justify-center gap-3 mb-4",children:[e.jsx(s,{className:"text-blue-600",size:32}),e.jsx("h1",{className:"text-2xl font-bold text-gray-800",children:"Integration Examples - Notification System"})]}),e.jsx("p",{className:"text-gray-600",children:"How to integrate notifications throughout the app with MongoDB and real-time updates"})]}),e.jsx("div",{className:"space-y-4",children:o.map(t=>e.jsxs("div",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsxs("button",{onClick:()=>c(t.id),className:"w-full p-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left transition-colors",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[t.icon,e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold text-gray-800",children:t.title}),e.jsx("p",{className:"text-sm text-gray-600",children:t.description})]})]}),e.jsx("div",{className:`transform transition-transform ${a===t.id?"rotate-180":""}`,children:"▼"})]}),a===t.id&&e.jsx("div",{className:"p-6 bg-white",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3 flex items-center gap-2",children:[e.jsx(s,{size:16}),"Code Example"]}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm",children:e.jsx("code",{children:t.code})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"font-medium text-gray-800 mb-3 flex items-center gap-2",children:[e.jsx(f,{size:16}),"Integration Features"]}),e.jsx("ul",{className:"space-y-2",children:t.integration.map((d,l)=>e.jsxs("li",{className:"flex items-start gap-2 text-sm text-gray-600",children:[e.jsx("span",{className:"text-green-500 mt-0.5",children:"•"}),d]},l))})]})]})})]},t.id))}),e.jsxs("div",{className:"mt-8 p-6 bg-blue-50 rounded-lg",children:[e.jsxs("h3",{className:"font-bold text-blue-800 mb-4 flex items-center gap-2",children:[e.jsx(n,{size:20}),"Technical Overview"]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6 text-sm",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Backend Implementation"}),e.jsxs("ul",{className:"space-y-1 text-blue-600",children:[e.jsx("li",{children:"• Every notification is saved in MongoDB"}),e.jsx("li",{children:"• Real-time delivery via WebSocket"}),e.jsx("li",{children:"• Support for different notification types"}),e.jsx("li",{children:"• Automatic cleanup of old notifications"}),e.jsx("li",{children:"• Admin notifications with high priority"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium text-blue-700 mb-2",children:"Frontend Integration"}),e.jsxs("ul",{className:"space-y-1 text-blue-600",children:[e.jsx("li",{children:"• Real-time updates via WebSocket"}),e.jsx("li",{children:"• Native browser notifications"}),e.jsx("li",{children:"• Notification counter in the header"}),e.jsx("li",{children:"• Mark as read/unread functionality"}),e.jsx("li",{children:"• Responsive notification dropdown"})]})]})]})]})]})},z=()=>e.jsx("div",{className:"container mx-auto px-4 py-8",children:e.jsx(I,{})});export{z as default};
