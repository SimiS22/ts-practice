interface Person {
  person: string;
  children?: Person[];
}

const familyTrees = [
  {
    person: 'GrandGrandGuy',
    children: [
      {
        person: 'GrandGuy',
        children: [
          {
            person: 'Guy',
            children: [
              {
                person: 'ADaughter',
                children: [
                  {
                    person: 'SomeName',
                  },
                  {
                    person: 'SomeOne',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    person: 'GrandGrandGal',
    children: [
      {
        person: 'GrandGal',
        children: [
          {
            person: 'Gal',
            children: [
              {
                person: 'ASon',
                children: [
                  {
                    person: 'SomeOtherName',
                  },
                  {
                    person: 'Somebody',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const getPersons = (inputArr: Person[]): string[] =>
  inputArr.reduce<string[]>(
    (accumulator, currentValue) => [...accumulator, currentValue.person, ...getPersons(currentValue.children || [])],
    []
  );

console.log(getPersons(familyTrees));
