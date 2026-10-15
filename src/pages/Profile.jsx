import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function Profile() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState('Economy');

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSend = () => {
    alert(`Profile completed! You selected ${selectedPlan} Plan.`);
    setCurrentStep(1);
  };

  return (
    <>
      <Sidebar collapsed={collapsed} mobileOpen={mobileOpen} />

      <button
        className="sidebar-toggle"
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        ‹
      </button>

      <div
        className={`sidebar-overlay ${mobileOpen ? 'show' : ''}`}
        onClick={() => setMobileOpen(false)}
      ></div>

      <main className="main-content">
        <Topbar
          pageTitle="My Profile"
          onMenuClick={() => setMobileOpen(true)}
        />

        {/* Profile Container */}
        <div className="profile-container">
          {/* Subtitle */}
          <p className="profile-intro">
            This information will help us personalize your travel experience.
          </p>

          {/* Steps Indicator */}
          <div className="profile-steps-bar">
            <div className={`profile-step ${currentStep === 1 ? 'active' : ''}`}>
              <div className="step-dot"></div>
              <span>Passenger Registration</span>
            </div>
            <div className={`profile-step ${currentStep === 2 ? 'active' : ''}`}>
              <div className="step-dot"></div>
              <span>Travel Preferences</span>
            </div>
            <div className={`profile-step ${currentStep === 3 ? 'active' : ''}`}>
              <div className="step-dot"></div>
              <span>Choose Your Plan</span>
            </div>
          </div>

          {/* Step 1 - Passenger Registration */}
          {currentStep === 1 && (
            <div className="profile-form-box">
              <h3>Passenger Registration</h3>
              <div className="profile-form-grid">
                <input type="text" placeholder="First name" />
                <input type="text" placeholder="Last name" />
              </div>
              <div className="profile-form-grid">
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Phone number" />
              </div>
              <div className="profile-form-grid">
                <input type="date" placeholder="Birth date" />
                <select>
                  <option>Nationality</option>
                  <option>Afghan</option>
                  <option>Pakistani</option>
                  <option>Turkish</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2 - Travel Preferences */}
          {currentStep === 2 && (
            <div className="profile-form-box">
              <h3>Travel Preferences</h3>
              <div className="profile-form-grid">
                <select>
                  <option>Seat preference</option>
                  <option>Window</option>
                  <option>Aisle</option>
                  <option>Middle</option>
                </select>
                <select>
                  <option>Meal preference</option>
                  <option>Standard</option>
                  <option>Vegetarian</option>
                  <option>Halal</option>
                  <option>Vegan</option>
                </select>
              </div>
              <div className="profile-form-grid">
                <select>
                  <option>Preferred departure time</option>
                  <option>Morning</option>
                  <option>Afternoon</option>
                  <option>Evening</option>
                  <option>Night</option>
                </select>
                <select>
                  <option>Frequent flyer program</option>
                  <option>SkyMiles Basic</option>
                  <option>SkyMiles Gold</option>
                  <option>SkyMiles Platinum</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 3 - Plans */}
          {currentStep === 3 && (
            <>
              <h3 className="plans-title">Choose Your Plan</h3>
              <div className="plans-grid">
                {/* Economy */}
                <div
                  className={`plan-card ${selectedPlan === 'Economy' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('Economy')}
                >
                  <h4>Economy Plan</h4>
                  <ul>
                    <li>✓ Standard seat</li>
                    <li>✓ 23 kg baggage</li>
                    <li>✓ Meal included</li>
                  </ul>
                </div>

                {/* Business */}
                <div
                  className={`plan-card ${selectedPlan === 'Business' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('Business')}
                >
                  <h4>Business Plan</h4>
                  <ul>
                    <li>✓ Premium seat</li>
                    <li>✓ 32 kg baggage</li>
                    <li>✓ Gourmet dining</li>
                  </ul>
                </div>

                {/* First Class */}
                <div
                  className={`plan-card ${selectedPlan === 'First Class' ? 'selected' : ''}`}
                  onClick={() => setSelectedPlan('First Class')}
                >
                  <h4>First Class Plan</h4>
                  <ul>
                    <li>✓ Luxury suite</li>
                    <li>✓ 40 kg baggage</li>
                    <li>✓ VIP lounge access</li>
                  </ul>
                </div>
              </div>
            </>
          )}

          {/* Buttons */}
          <div className="profile-buttons">
            {currentStep > 1 && (
              <button className="btn-back" onClick={handleBack}>
                BACK
              </button>
            )}
            {currentStep < 3 && (
              <button className="btn-send" onClick={handleNext}>
                NEXT
              </button>
            )}
            {currentStep === 3 && (
              <button className="btn-send" onClick={handleSend}>
                SEND
              </button>
            )}
          </div>
        </div>

        <div className="footer">
          © 2026, made with ❤️ by SkyWings Airlines for a better travel.
        </div>
      </main>
    </>
  );
}

export default Profile;