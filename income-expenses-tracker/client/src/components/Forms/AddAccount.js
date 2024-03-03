import { useContext, useState, useEffect } from 'react'
import {accountContext} from "../context/AccountContext/AccountContext"
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'

export default function AddAccount() {
    const { createAccountAction } = useContext(accountContext)
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(true)

    useEffect(() => {
            const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    })

    const [formData, setFormData] = useState({
        name: "",
        accountType: "",
        initialBalance: "",
        notes: "",
    })

    // Destructure
    const { name, accountType, initialBalance, notes} = formData

    // handle form change
    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    // handle form submit
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            setIsLoading(true)
            // dispatch action
            if (!name || !accountType || !initialBalance || !notes) {
                return alert("Please provide all details")
            }
            await createAccountAction(formData, navigate)
        } catch (error) {
            setError(error.message || "An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div>
            {isLoading ? (
                <Loading /> 
            ) : (
                <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Add Account
                        </h2>
                        <p>
                            {error && (
                                <span className='text-red-500'>{error}</span>
                            )}
                        </p>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form onSubmit={handleSubmit} className="space-y6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1">
                                        <input value={formData.name} onChange={handleChange} name="name" type="text" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"/>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Initial Deposit ($)
                                    </label>
                                    <div className="mt-1">
                                        <input type="number" value={formData.initialBalance} onChange={handleChange} name="initialBalance" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Account Type
                                    </label>
                                    <select name="accountType" value={formData.accountType} onChange={handleChange} className="mt-1 block w-full border-2 rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                                        <option value="Savings">Savings</option>
                                        <option value="Investment">Investment</option>
                                        <option value="Checking">Checking</option>
                                        <option value="Credit Card">Credit Card</option>
                                        <option value="Utilties">Utilities</option>
                                        <option value="Billing">Billing</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Loan">Loan</option>
                                        <option value="Personal">Personal</option>
                                        <option value="Groceries">Groceries</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Project">Project</option>
                                        <option value="Uncategorized">Uncategorized</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Add Note
                                    </label>
                                    <div className="mt-1">
                                        <textarea name="notes" type="text" rows={4} value={formData.notes} onChange={handleChange} className="block w-full border-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" className="flex w-full mt-8 justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                        Add New Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}