import { Button } from 'components/Button'
import { DropdownMenu } from 'components/DropdownMenu'

export const headers = [
  { key: 'header1', label: 'Header 1', sortable: false },
  { key: 'header2', label: 'Header 2', sortable: true },
  { key: 'header3', label: 'Header 3', sortable: true },
  { key: 'header4', label: 'Header 4', sortable: false }
]

export const data = [
  {
    id: 1,
    key: 1,
    header1: 'lorem ipsum',
    header2: 'R$ 1000',
    header3: 'lorem ipsum',
    header4: () => (
      <DropdownMenu
        buttonIcon="verticalMore"
        buttonLabel="Menu"
        buttonStyle="text"
        menuItems={[
          {
            key: 'item1',
            render: () => (
              <Button onClick={() => console.log('a')} styleType="secondary">
                Button 1
              </Button>
            )
          },
          {
            key: 'item2',
            render: () => (
              <Button onClick={() => console.log('b')} styleType="secondary">
                Button 2
              </Button>
            )
          }
        ]}
      />
    ),
    header5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 2,
    key: 2,
    header1: 'lorem ipsum',
    header2: 'R$ 1000',
    header3: 'lorem ipsum',
    header4: 'lorem ipsum',
    header5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 3,
    key: 3,
    header1: 'lorem ipsum',
    header2: 'R$ 1000',
    header3: 'lorem ipsum',
    header4: 'lorem ipsum',
    header5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 4,
    key: 4,
    header1: 'lorem ipsum',
    header2: 'R$ 1000',
    header3: 'lorem ipsum',
    header4: 'lorem ipsum',
    header5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  },
  {
    id: 5,
    key: 5,
    header1: () => <p>Lorem ipsum function</p>,
    header2: 'R$ 1000',
    header3: 'lorem ipsum',
    header4: 'lorem ipsum',
    header5: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
]

export const collapse = [{ key: 'header5', label: 'Header 5' }]
