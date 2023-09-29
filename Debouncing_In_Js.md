#### # Debouncing In Javascript

**Example :**

**Q : Why do we even need to provide auto suggest in search ?**
Ans : To provide better ux.

Debouncing says suppose if your typing too fast then the diff. between two keystrokes is very less, where as suppose if your typing too slow then diff. between two keystrokes is very high.

**e.g -**
typing slow = 200ms
typing fast = 30ms

It can cause huge difference in real life scenarios
**Without Debouncing**

- iphone 11 pro max = there are 17 characters and if we call an api on every character then it will be resource heavy if there are concurrent users the no of times the api is called will be very high.

**$ scenario** : 14 characters \* 1000 users = 14000 api calls

**Debouncing**

- we just make 4 api calls + 1000 users = 4000 api calls

normally debouncing in search are applied with 200ms

- if difference between 2 key strokes is <200ms - decline api call. 
- if difference between 2 key strokes is >= 200ms - make an api call.
