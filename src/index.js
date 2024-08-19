import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { Decimal } from '@cosmjs/math';
import { Bech32Address } from '@keplr-wallet/cosmos';
const EmbedOsmoChainInfos =
{
	"chainId": "osmo-test-5",
	"chainName": "osmosis",
	"rpc": "https://rpc.osmotest5.osmosis.zone",
	"rest": "https://lcd.osmotest5.osmosis.zone",
	"bip44": {
		"coinType": 118
	},
	"coinType": 118,
	"bech32Config": {
		"bech32PrefixAccAddr": "osmo",
		"bech32PrefixAccPub": "osmopub",
		"bech32PrefixValAddr": "osmovaloper",
		"bech32PrefixValPub": "osmovaloperpub",
		"bech32PrefixConsAddr": "osmovalcons",
		"bech32PrefixConsPub": "osmovalconspub"
	},
	"currencies": [
		{
			"coinDenom": "OSMO",
			"coinMinimalDenom": "uosmo",
			"coinDecimals": 6,
			"coinGeckoId": "osmosis"
		}
	],
	"feeCurrencies": [
		{
			"coinDenom": "OSMO",
			"coinMinimalDenom": "uosmo",
			"coinDecimals": 6,
			"coinGeckoId": "osmosis",
			"gasPriceStep": {
				"low": 0.01,
				"average": 0.025,
				"high": 0.03
			}
		}
	],
	"gasPriceStep": {
		"low": 0.01,
		"average": 0.025,
		"high": 0.03
	},
	"stakeCurrency": {
		"coinDenom": "OSMO",
		"coinMinimalDenom": "uosmo",
		"coinDecimals": 6,
		"coinGeckoId": "osmosis"
	},
	"features": []
};
const EmbedAtomChainInfos = 
{
    "chainId": "cosmoshub-4",
	"chainName": "Cosmos Hub",
	"rpc": "https://rpc-cosmoshub.keplr.app",
	"rest": "https://lcd-cosmoshub.keplr.app",
	"bip44": {
		"coinType": 118
	},
	"coinType": 118,
	"bech32Config": {
		"bech32PrefixAccAddr": "atom",
		"bech32PrefixAccPub": "atompub",
		"bech32PrefixValAddr": "atomvaloper",
		"bech32PrefixValPub": "atomvaloperpub",
		"bech32PrefixConsAddr": "atomvalcons",
		"bech32PrefixConsPub": "atomvalconspub"
	},
	"currencies": [
		{
			"coinDenom": "ATOM",
			"coinMinimalDenom": "uatom",
			"coinDecimals": 6,
			"coinGeckoId": "cosmos"
		}
	],
	"feeCurrencies": [
		{
			"coinDenom": "ATOM",
			"coinMinimalDenom": "uatom",
			"coinDecimals": 6,
			"coinGeckoId": "cosmos",
			"gasPriceStep": {
				"low": 0.01,
				"average": 0.025,
				"high": 0.03
			}
		}
	],
	"gasPriceStep": {
		"low": 0.01,
		"average": 0.025,
		"high": 0.03
	},
	"stakeCurrency": {
		"coinDenom": "ATOM",
		"coinMinimalDenom": "uatom",
		"coinDecimals": 6,
		"coinGeckoId": "cosmos"
	},
	"features": []
};
const EmbedNobleChainInfos =
{
	"chainId": "noble-1",
	"chainName": "Noble",
	"rpc": "https://rpc-noble.keplr.app",
	"rest": "https://lcd-noble.keplr.app",
	"bip44": {
		"coinType": 118
	},
	"coinType": 118,
	"bech32Config": Bech32Address.defaultBech32Config('noble'),
	"currencies": [
		{
			"coinDenom": "USDC",
			"coinMinimalDenom": "uusdc",
			"coinDecimals": 6,
			"coinGeckoId": "noble"
		}
	],
	"feeCurrencies": [
		{
			"coinDenom": "OSMO",
			"coinMinimalDenom": "uosmo",
			"coinDecimals": 6,
			"coinGeckoId": "noble",
			"gasPriceStep": {
				"low": 0.01,
				"average": 0.025,
				"high": 0.03
			}
		}
	],
	"gasPriceStep": {
		"low": 0.01,
		"average": 0.025,
		"high": 0.03
	},
	"stakeCurrency": {
		"coinDenom": "USDC",
		"coinMinimalDenom": "uusdc",
		"coinDecimals": 6,
		"coinGeckoId": "noble"
	},
	"features": []
};
const EmbedOsmoTestChainInfos =
{
	"chainId": "osmo-test-5",
	"chainName": "osmosis",
	"rpc": "https://rpc.osmotest5.osmosis.zone",
	"rest": "https://lcd.osmotest5.osmosis.zone",
	"bip44": {
		"coinType": 118
	},
	"coinType": 118,
	"bech32Config": {
		"bech32PrefixAccAddr": "usdc",
		"bech32PrefixAccPub": "osmopub",
		"bech32PrefixValAddr": "osmovaloper",
		"bech32PrefixValPub": "osmovaloperpub",
		"bech32PrefixConsAddr": "osmovalcons",
		"bech32PrefixConsPub": "osmovalconspub"
	},
	"currencies": [
		{
			"coinDenom": "USDC",
			"coinMinimalDenom": "uusdc",
			"coinDecimals": 6,
			"coinGeckoId": "osmosis"
		}
	],
	"feeCurrencies": [
		{
			"coinDenom": "OSMO",
			"coinMinimalDenom": "uosmo",
			"coinDecimals": 6,
			"coinGeckoId": "osmosis",
			"gasPriceStep": {
				"low": 0.01,
				"average": 0.025,
				"high": 0.03
			}
		}
	],
	"gasPriceStep": {
		"low": 0.01,
		"average": 0.025,
		"high": 0.03
	},
	"stakeCurrency": {
		"coinDenom": "OSMO",
		"coinMinimalDenom": "uosmo",
		"coinDecimals": 6,
		"coinGeckoId": "osmosis"
	},
	"features": []
};
let accounts, CosmWasmClient, queryHandler, gasPrice;

document.addEventListener("DOMContentLoaded", async function() {
    
    const modal = document.getElementById("donationModal");
    const btn = document.getElementById("openModalBtn");
    const span = document.getElementsByClassName("close")[0];
    const confirmBtn = document.getElementById("confirmBtn");
	const loadingSpinner = document.getElementById("loadingSpinner");

    // Open the modal when clicking the "Donate" button
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Close the modal when clicking the "X" button
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when clicking anywhere outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    // Handle confirmation and Keplr wallet integration
    confirmBtn.onclick = async function() {   

        const amount = document.getElementById("donation-amount").value;
        const amountInMicro = (amount * 1000000).toFixed(0); // Convert to micro units (uosmo, uatom, uusdc)
        const coinSelect = document.getElementById("coin-select").value;
        const destinationAddress = "osmo1gn38jyhp9khepxw63s6hlxzthhz7vsve2kp3uh"; // Please input destination address you are gonna donate.
        const ChainInfo = getChainInfoByCoin(coinSelect);
        console.log("ChainInfo:",ChainInfo);

        if (!amount || amount <= 0) {
            alert("Please enter a valid amount.");
            return;
        }

		if (typeof window.getOfflineSigner === "undefined") {
			alert("Keplr wallet not found. Please install Keplr.");
            return;
		}

		loadingSpinner.style.display = "block";
        const sendTokens = async () => {
            if (window.keplr) {
                console.log('send tokens');
                if (window.keplr.experimentalSuggestChain) {
                    try {
                    await window.keplr.experimentalSuggestChain(ChainInfo);
                    await window.keplr.enable(ChainInfo.chainId);

                    const offlineSigner = await window.getOfflineSigner(ChainInfo.chainId);
                    accounts = await offlineSigner.getAccounts();

                    // Ensure the chain ID matches
                    if (!accounts || accounts.length === 0) {
                        console.error("No accounts found for the given chain ID");
                        return;
                    }
					// Ensure the chain ID matches between the client and the signer
                    if (offlineSigner.chainId !== ChainInfo.chainId) {
                        console.error("Chain ID mismatch detected");
                        return;
                    }
                    console.log("Chain ID detected succesfully");

					try {
						CosmWasmClient = await SigningCosmWasmClient.connectWithSigner(
							ChainInfo.rpc,
							offlineSigner,
							{
								gasPrice: {
									amount: Decimal.fromAtomics("1000", 4),
									denom: ChainInfo.currencies[0].coinMinimalDenom,
								},
							}
						);
					} catch (error) {
						console.error("Failed to send tokens:", error);
						alert("Failed to send tokens:", error);
					}

  
                    // Ensure you have enough balance
                    const balance = await CosmWasmClient.getBalance(
                        accounts[0].address,
                        ChainInfo.currencies[0].coinMinimalDenom
                    );

                    if(Number(balance.amount) < Number(amountInMicro)) {
                        alert("Please check your balance.");
                        return;
                    }
                        let result = await CosmWasmClient.sendTokens(
                            accounts[0].address,
                            destinationAddress,
                            [{ denom: ChainInfo.currencies[0].coinMinimalDenom, amount: amountInMicro }],
                            "auto",
                            "Keplr token sent"
                        );
                        console.log("Transaction Response:", result);
                        alert("Congratulations!!");
                    } catch (error) {
                        console.error("Error sending tokens:", error);
                    }
                } else {
                    console.warn(
                        "Error accessing experimental features, please update Keplr");
					alert(
						"Error accessing experimental features, please update Keplr");
                }
            } else {
                console.warn("Error accessing Keplr, please install Keplr");
				alert("Error accessing Keplr, please install Keplr");
            }
        };
        try {
            await sendTokens();
        } catch (error) {
            console.error("Failed to send tokens:", error);
			alert("Failed to send tokens:", error);
        } finally {
            loadingSpinner.style.display = "none";
		}
    };

    function getChainInfoByCoin(coin) {
        switch (coin) {
            case "osmo":
                return EmbedOsmoChainInfos; // Denom for Osmosis
            case "atom":
                return EmbedAtomChainInfos; // Denom for Cosmos Hub
			case "usdc":
				return EmbedNobleChainInfos;
            case "osmo_t":
                return EmbedOsmoTestChainInfos; // Denom for Osmosis Test
            default:
                return EmbedChainOsmoInfos;
        }
    }
});