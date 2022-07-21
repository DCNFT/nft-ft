import { useCallback, useState } from 'react'
import Input from 'components/Common/Input/Input'
import { Button } from 'components/Common'
import Container from 'components/Layout/Container'
const Search = () => {
  const [tabId, setTabId] = useState('1')
  const handleTabId = useCallback(
    (tabId: string) => {
      setTabId(tabId)
    },
    [tabId],
  )
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '600px',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid grey',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            onClick={() => handleTabId('1')}
            style={{
              padding: '20px',
            }}
          >
            Content
          </div>
          <div
            onClick={() => handleTabId('2')}
            style={{
              padding: '20px',
            }}
          >
            Content2
          </div>
        </div>
        {tabId === '1' && (
          <div style={{ cursor: 'pointer' }}>
            <Input type="text" label="label" />
            <div style={{ margin: '20px 0', width: '100%' }}>
              <Button width="100%">검색</Button>
            </div>
          </div>
        )}
        {tabId === '2' && (
          <div style={{ cursor: 'pointer' }}>
            <div>
              <Input type="text" label="label" />
              <Input type="text" label="label" />
              <Input type="text" label="label" />
            </div>
            <div style={{ margin: '20px 0', width: '100%' }}>
              <Button>검색</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
export default Search
