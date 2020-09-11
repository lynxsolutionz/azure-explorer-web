import React, { useState } from 'react'
import Layout from 'layout/Layout'

type S = {
	factoryName: string
	resourceGroupName: string
	subscriptionId: string
}

const Home = () => {

	const [state, setState]  = useState<S>({
		factoryName: "",
		resourceGroupName: "",
		subscriptionId: ""
	})

	return <Layout>
		<div className="section hero-body" style={{marginBottom: '5rem'}}>
			<div className="container">
				<div className="columns">
					<div className="column is-two-fifths">
						<div className="field">
							<label className="label">Factory Name</label>
							<div className="control">
								<input className="input" type="text" 
									onBlur={(e) => setState({...state, factoryName: e.target.name})}
									defaultValue={state.factoryName}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Resource Group Name</label>
							<div className="control">
								<input className="input" type="text"
									onBlur={(e) => setState({...state, resourceGroupName: e.target.name})}
									defaultValue={state.resourceGroupName}/>
							</div>
						</div>
						<div className="field">
							<label className="label">Subscription Id</label>
							<div className="control">
								<input className="input" type="text"
									onBlur={(e) => setState({...state, subscriptionId: e.target.name})}
									defaultValue={state.subscriptionId}/>
							</div>
						</div>
						<div className="field is-grouped is-grouped-right">
							<div className="control">
								<button className="button is-primary">Run</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Layout>
}

export default Home