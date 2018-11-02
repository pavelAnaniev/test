import { Cat } from '../cat/states';

let justCat;

beforeEach(() => {
  justCat = new Cat;
});
// afterAll(() => {
//   justCat.initState();
// })
test('Cat cat wake', () => {
    justCat.wake();
    expect(justCat.state).toEqual({sleep: false, meows: false});
  });

test('Cat can weowing', () => {
    justCat.wake();
    justCat.meowing();
    expect(justCat.state).toEqual({sleep: false, meows: true});
  })

test('Cat can\'t meowing when sleep', () => {
  justCat.meowing();
  expect(justCat.state).toEqual({sleep: true, meows: false});
})

test('Cat can sleep after wake', () => {
  justCat.wake();
  justCat.sleep();
  expect(justCat.state).toEqual({sleep: true, meows: false});
})
test('Cat can\'t sleep when meowing', () => {
  justCat.wake();
  justCat.meowing();
  justCat.sleep();
  expect(justCat.state).toEqual({sleep: false, meows: true});  
})

